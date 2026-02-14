package com.example.govschemes_project;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class GovschemesProjectApplication {

	public static void main(String[] args) {
		SpringApplication app = new SpringApplication(GovschemesProjectApplication.class);
		app.addListeners(new com.example.govschemes_project.config.DatabaseInitializer());
		app.run(args);
	}

}
