package com.kerfaiyassine.referee.services;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class QueryService {

    private final JdbcTemplate jdbcTemplate;

    public QueryService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<Map<String, Object>> executeSafeSelect(String sql) {

        if (sql == null || sql.isBlank()) {
            throw new RuntimeException("Generated SQL is empty.");
        }

        String cleaned = sql.trim().toLowerCase();

        if (!cleaned.startsWith("select")) {
            throw new RuntimeException("Only SELECT queries are allowed. Generated: " + sql);
        }

        if (cleaned.contains("drop") ||
                cleaned.contains("delete") ||
                cleaned.contains("update") ||
                cleaned.contains("insert") ||
                cleaned.contains("alter") ||
                cleaned.contains("truncate")) {
            throw new RuntimeException("Dangerous SQL detected: " + sql);
        }

        System.out.println("Executing SQL: " + sql);

        return jdbcTemplate.queryForList(sql);
    }
}