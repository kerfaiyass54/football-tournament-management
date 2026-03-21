package com.kerfaiyassine.supporter.services;

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
        Do NOT include explanations.
        Do NOT include markdown.
        Do NOT include backticks.
        Return ONLY pure JSON.

        The database contains two collections:

        1) "supporters"
        {
          name: String,
          nationality: String,
          locationId: String
        }

        2) "locations"
        {
          name: String,
          country: String,
          continent: String,
          supporters: [Long]
        }

        Rules:
        - Determine which collection to query based on the user question.
        - NEVER mix fields from different collections.
        - If searching by name, nationality, country, or continent,
          use case-insensitive regex.
        - continent is stored as String (enum).
        - locationId is a String reference.
        - supporters is an array of Long IDs.
        - Use MongoDB operators like $gt, $lt, $in when needed.

        Return ONLY the JSON filter.

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