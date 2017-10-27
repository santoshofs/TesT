package com.loginmodule2.service;

import com.loginmodule2.model.User;

public interface UserService {
	
	public User findUserByEmail(String email);

	public String addUser(User user);

}
