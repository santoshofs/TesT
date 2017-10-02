package com.allniv.dao;

import com.allniv.model.UserModel;
import java.util.List;

public interface UserDao {
	
	public List<UserModel> getAllUserModel();
	public String addUser(UserModel user);

}
