package com.example.govschemes_project.service;

import com.example.govschemes_project.dto.UserDTO;
import com.example.govschemes_project.enums.Role;

import java.util.List;

public interface UserService {

    UserDTO getUserProfile(String username);

    List<UserDTO> getAllUsers();

    void deleteUser(Long userId);

    UserDTO updateUserRole(Long userId, Role role);
}
