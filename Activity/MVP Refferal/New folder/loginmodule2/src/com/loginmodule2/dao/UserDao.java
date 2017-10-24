package com.loginmodule2.dao;

import com.loginmodule2.model.User;

public interface UserDao {
	
	public User findUserByEmail(String email);
	public String addUser(User user);

}
