package com.example.govschemes_project.service;

import com.example.govschemes_project.dto.AuthResponse;
import com.example.govschemes_project.dto.LoginRequest;
import com.example.govschemes_project.dto.SignupRequest;

public interface AuthService {

    AuthResponse signup(SignupRequest request);

    AuthResponse login(LoginRequest request);
}
