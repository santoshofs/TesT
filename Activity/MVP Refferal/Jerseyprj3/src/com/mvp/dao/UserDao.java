package com.mvp.dao;
import com.mvp.model.UserModel;
	import java.util.List;

	public interface UserDao {
		
		public List<UserModel> getAllUserModel();
		public String addUser(UserModel user);

	}

