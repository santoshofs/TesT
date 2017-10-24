package com.loginmodule2.service;

import com.loginmodule2.dao.UserDao;
import com.loginmodule2.dao.UserDaoImpl;
import com.loginmodule2.model.User;

public class UserServiceImpl implements UserService{
	
	UserDao userDao = new UserDaoImpl();

	@Override
	public User findUserByEmail(String email) {
	
		return userDao.findUserByEmail(email);
	}

	@Override
	public String addUser(User user) {
		
		return userDao.addUser(user);
	}

}
