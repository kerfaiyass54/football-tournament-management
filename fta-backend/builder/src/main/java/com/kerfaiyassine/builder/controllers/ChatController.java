package com.kerfaiyassine.builder.controllers;

import com.kerfaiyassine.builder.services.GeminiService;
import com.kerfaiyassine.builder.services.QueryService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
                Table builders(
                    id INT PRIMARY KEY,
                    name VARCHAR(100) UNIQUE NOT NULL,
                    nationality VARCHAR(50) NOT NULL,
                    expertise VARCHAR(255) NOT NULL,
                    year_established INT CHECK (year_established >= 1950),
                    price DECIMAL(19,2) CHECK (price >= 0)
                );
                """;

        String sql = geminiService.generateSQL(schema, question);

        System.out.println("Generated SQL: " + sql);

        return new ResponseEntity<>(queryService.executeSafeSelect(sql), HttpStatus.CREATED);
    }
}