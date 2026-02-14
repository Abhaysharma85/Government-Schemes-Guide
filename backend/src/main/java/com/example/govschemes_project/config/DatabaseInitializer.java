package com.example.govschemes_project.config;

import org.springframework.boot.context.event.ApplicationEnvironmentPreparedEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.core.env.ConfigurableEnvironment;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

public class DatabaseInitializer implements ApplicationListener<ApplicationEnvironmentPreparedEvent> {

    @Override
    public void onApplicationEvent(ApplicationEnvironmentPreparedEvent event) {
        ConfigurableEnvironment environment = event.getEnvironment();
        String url = environment.getProperty("spring.datasource.url");
        String username = environment.getProperty("spring.datasource.username");
        String password = environment.getProperty("spring.datasource.password");

        if (url == null || username == null) {
            System.err.println("Database configuration not found, skipping automatic creation.");
            return;
        }

        String dbName = extractDatabaseName(url);
        if (dbName == null) {
            System.err.println("Could not extract database name from URL: " + url);
            return;
        }

        // Base URL to connect to the default 'postgres' database
        String baseUrl = url.substring(0, url.lastIndexOf("/"));
        String adminUrl = baseUrl + "/postgres";

        try (Connection connection = DriverManager.getConnection(adminUrl, username, password);
                Statement statement = connection.createStatement()) {

            // Check if database exists
            var resultSet = statement.executeQuery("SELECT 1 FROM pg_database WHERE datname = '" + dbName + "'");
            if (!resultSet.next()) {
                System.out.println("Database '" + dbName + "' does not exist. Creating it...");
                statement.executeUpdate("CREATE DATABASE " + dbName);
                System.out.println("Database '" + dbName + "' created successfully.");
            } else {
                System.out.println("Database '" + dbName + "' already exists.");
            }

        } catch (Exception e) {
            System.err.println("Error initializing database: " + e.getMessage());
            // We proceed, as the DB might exist and be accessible, or this might be a
            // connection error
            // that the main app will handle/report better.
        }
    }

    private String extractDatabaseName(String url) {
        int lastSlashIndex = url.lastIndexOf("/");
        if (lastSlashIndex == -1)
            return null;

        String dbPart = url.substring(lastSlashIndex + 1);
        int questIndex = dbPart.indexOf("?");
        if (questIndex != -1) {
            return dbPart.substring(0, questIndex);
        }
        return dbPart;
    }
}
