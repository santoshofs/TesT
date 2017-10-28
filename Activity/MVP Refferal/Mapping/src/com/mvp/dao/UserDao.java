package com.mvp.dao;

import com.mvp.model.User;

public interface UserDao {
	
	public User findUserByEmail(String email);
	public String addUser(User user);

}
