package com.mvp.service;

import com.mvp.dao.UserDao;
import com.mvp.dao.UserDaoImpl;
import com.mvp.model.User;

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
