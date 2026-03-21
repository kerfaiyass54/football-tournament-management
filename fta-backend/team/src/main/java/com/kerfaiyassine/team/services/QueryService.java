package com.kerfaiyassine.team.services;


import com.kerfaiyassine.team.entities.Team;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.BasicQuery;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QueryService {

    private final MongoTemplate mongoTemplate;

    public QueryService(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    public List<Team> executeSafeFind(String jsonQuery) {

        if (jsonQuery == null || jsonQuery.isBlank()) {
            throw new RuntimeException("Generated Mongo query is empty.");
        }

        String lower = jsonQuery.toLowerCase();

        // 🚨 block dangerous operators
        if (lower.contains("delete") ||
                lower.contains("remove") ||
                lower.contains("update") ||
                lower.contains("drop") ||
                lower.contains("$out") ||
                lower.contains("$merge")) {
            throw new RuntimeException("Dangerous Mongo operation detected.");
        }

        System.out.println("Executing Mongo Query: " + jsonQuery);

        BasicQuery query = new BasicQuery(jsonQuery);

        return mongoTemplate.find(query.limit(50), Team.class);
    }
}