	package com.mvp.service;

	import java.util.List;

	import com.mvp.model.UserModel;
	import com.mvp.dao.UserDao;
	import com.mvp.dao.UserDaoImpl;

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


