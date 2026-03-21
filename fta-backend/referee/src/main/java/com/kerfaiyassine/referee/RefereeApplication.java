package com.kerfaiyassine.referee;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@SpringBootApplication
@EnableCaching
public class RefereeApplication {

	public static void main(String[] args) {
		SpringApplication.run(RefereeApplication.class, args);
	}

}
