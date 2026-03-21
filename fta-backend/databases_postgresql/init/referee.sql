CREATE TABLE referees (
                          id SERIAL PRIMARY KEY,
                          name VARCHAR(100) NOT NULL UNIQUE,
                          nationality VARCHAR(50) NOT NULL,
                          organizer_id BIGINT NOT NULL
);