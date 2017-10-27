
	package com.mvp.service;

	import java.util.List;
	import com.mvp.model.UserModel;

	public interface UserService {

		public List<UserModel> getAllUsers();
		public String addUser(UserModel user);
	}


