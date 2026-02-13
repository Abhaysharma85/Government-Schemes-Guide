package com.govschemes.backend.service;

import com.govschemes.backend.dto.AuthResponse;
import com.govschemes.backend.dto.LoginRequest;
import com.govschemes.backend.dto.SignupRequest;
import com.govschemes.backend.entity.User;

public interface AuthService {
    AuthResponse signup(SignupRequest request);

    AuthResponse login(LoginRequest request);

    User getCurrentUser(String email);
}
