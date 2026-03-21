package com.kerfaiyassine.organizer.controllers;


import com.kerfaiyassine.organizer.services.GeminiService;
import com.kerfaiyassine.organizer.services.QueryService;
import io.swagger.v3.oas.annotations.Operation;
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
    @Operation(summary = "Get chatting with database")
    public ResponseEntity<?> chat(@RequestBody Map<String, String> body) {

        String question = body.get("question");

        if (question == null || question.isBlank()) {
            return ResponseEntity.badRequest().body("Question is required.");
        }

        String schema = """
                Table organizers(
                    id SERIAL PRIMARY KEY,
                    name VARCHAR(100) UNIQUE NOT NULL
                );
                """;

        String sql = geminiService.generateSQL(schema, question);

        System.out.println("Generated SQL: " + sql);

        return ResponseEntity.ok(
                queryService.executeSafeSelect(sql)
        );
    }
}