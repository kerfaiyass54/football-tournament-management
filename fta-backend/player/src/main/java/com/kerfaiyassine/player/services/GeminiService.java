package com.kerfaiyassine.player.services;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;
import java.util.Map;

@Service
public class GeminiService {

    @Value("${gemini.api-key}")
    private String apiKey;

    private final WebClient webClient;
    private final ObjectMapper objectMapper = new ObjectMapper();

    public GeminiService() {
        this.webClient = WebClient.builder()
                .baseUrl("https://generativelanguage.googleapis.com/v1beta")
                .build();
    }

    public String generateMongoQuery(String question) {

        String prompt = """
        You are a MongoDB expert.

        Generate ONLY a valid MongoDB JSON filter query.
        Use ONLY the "players" collection.
        Do NOT include explanations.
        Do NOT include markdown.
        Do NOT include backticks.
        Return ONLY pure JSON.

        Collection Schema:
        {
          name: String,
          nationality: String,
          position: String,
          ability: Integer,
          yearOfBirth: Integer,
          status: String,
          marketValue: Double,
          lineup: String,
          number: Integer,
          contracts: [String],
          height: Double,
          weight: Double
        }

        Rules:
        - name and nationality → use case-insensitive regex when searching.
        - position, status and lineup are enums stored as String.
        - ability, yearOfBirth, number are integers.
        - marketValue, height and weight are numeric (Double).
        - contracts is an array of strings → use $in when filtering.
        - Use proper MongoDB operators like $gt, $lt, $gte, $lte, $in when needed.
        - NEVER mix fields that do not exist in this schema.
        - Return ONLY the JSON filter.

        User Question:
        %s
        """.formatted(question);

        Map<String, Object> request = Map.of(
                "contents", List.of(
                        Map.of("parts", List.of(
                                Map.of("text", prompt)
                        ))
                )
        );

        String response = webClient.post()
                .uri("/models/gemini-2.5-flash:generateContent?key=" + apiKey)
                .bodyValue(request)
                .retrieve()
                .bodyToMono(String.class)
                .block();

        return extractContent(response);
    }

    private String extractContent(String response) {
        try {
            JsonNode root = objectMapper.readTree(response);

            return root
                    .path("candidates")
                    .get(0)
                    .path("content")
                    .path("parts")
                    .get(0)
                    .path("text")
                    .asText()
                    .trim();

        } catch (Exception e) {
            throw new RuntimeException("Failed to parse Gemini response: " + response, e);
        }
    }
}