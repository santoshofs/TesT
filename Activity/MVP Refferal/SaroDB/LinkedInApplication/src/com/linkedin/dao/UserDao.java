package com.linkedin.dao;

import com.linkedin.model.User;

public interface UserDao {
	
	public User findUserByEmail(String email);

}
