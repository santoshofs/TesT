package com.allniv.service;

import java.util.List;

import com.allniv.model.UserModel;
import com.allniv.dao.UserDao;
import com.allniv.dao.UserDaoImpl;

public class UserServiceImpl implements UserService{
	
	UserDao userDao = new UserDaoImpl();
	
	@Override
	public List<UserModel> getAllUsers() {
		
		return userDao.getAllUserModel();
	}

	@Override
	public String addUser(UserModel user) {
		
		return userDao.addUser(user);
	}

}
