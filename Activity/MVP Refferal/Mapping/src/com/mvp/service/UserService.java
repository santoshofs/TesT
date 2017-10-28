package com.mvp.service;

import com.mvp.model.User;

public interface UserService {
	
	public User findUserByEmail(String email);
	public String addUser(User user);

}
