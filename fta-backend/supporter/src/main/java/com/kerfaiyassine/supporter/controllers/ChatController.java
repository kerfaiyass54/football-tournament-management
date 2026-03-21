package com.kerfaiyassine.supporter.controllers;


import com.kerfaiyassine.supporter.services.GeminiService;
import com.kerfaiyassine.supporter.services.QueryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/chat")
public class ChatController {

    private final GeminiService geminiService;
    private final QueryService queryService;

    public ChatController(GeminiService geminiService,
                          QueryService queryService) {
        this.geminiService = geminiService;
        this.queryService = queryService;
    }

    @PostMapping
    public ResponseEntity<?> chat(@RequestBody Map<String, String> body) {

        String question = body.get("question");

        if (question == null || question.isBlank()) {
            return ResponseEntity.badRequest().body("Question is required.");
        }

        String mongoQuery = geminiService.generateMongoQuery(question);

        System.out.println("Generated Mongo Query: " + mongoQuery);

        return ResponseEntity.ok(
                queryService.executeSafeFind(mongoQuery)
        );
    }
}