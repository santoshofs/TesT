package com.allniv.service;

import java.util.List;
import com.allniv.model.UserModel;

public interface UserService {

	public List<UserModel> getAllUsers();
	public String addUser(UserModel user);
}
