package com.linkedin.service;

import com.linkedin.dao.UserDao;
import com.linkedin.dao.UserDaoImpl;
import com.linkedin.model.User;

public class UserServiceImpl implements UserService{
	
	UserDao userDao = new UserDaoImpl();

	@Override
	public User findUserByEmail(String email) {
	
		return userDao.findUserByEmail(email);
	}

}
