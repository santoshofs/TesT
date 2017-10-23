package com.linkedin.service;

import com.linkedin.model.User;

public interface UserService {
	
	public User findUserByEmail(String email);

}
