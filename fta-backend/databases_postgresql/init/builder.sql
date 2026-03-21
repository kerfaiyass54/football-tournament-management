CREATE TABLE builders (
                          id INT PRIMARY KEY,

                          name VARCHAR(100) NOT NULL UNIQUE,

                          nationality VARCHAR(50) NOT NULL,

                          expertise VARCHAR(255) NOT NULL,

                          year_established INT,

                          price DECIMAL(19,2) NOT NULL,

                          CONSTRAINT chk_year_established CHECK (year_established >= 1950),
                          CONSTRAINT chk_price CHECK (price >= 0)
);