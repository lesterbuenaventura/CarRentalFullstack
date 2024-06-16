package com.codewithprojects.services.auth;

import com.codewithprojects.dto.SignupRequest;
import com.codewithprojects.dto.UserDto;

public interface AuthService {
    UserDto createCustomer(SignupRequest signupRequest);
    boolean hasCustomerWithEmail(String email);
}
