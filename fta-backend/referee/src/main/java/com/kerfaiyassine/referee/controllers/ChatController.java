package com.kerfaiyassine.referee.controllers;



import com.kerfaiyassine.referee.services.GeminiService;
import com.kerfaiyassine.referee.services.QueryService;
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

        // ✅ UPDATED SCHEMA (matches your real DB)
        String schema = """
                Table organizers(
                    id SERIAL PRIMARY KEY,
                    name VARCHAR(100) UNIQUE NOT NULL,
                    nationality VARCHAR(50) NOT NULL
                );
                """;

        String sql = geminiService.generateSQL(schema, question);

        System.out.println("Generated SQL: " + sql);

        return ResponseEntity.ok(
                queryService.executeSafeSelect(sql)
        );
    }
}