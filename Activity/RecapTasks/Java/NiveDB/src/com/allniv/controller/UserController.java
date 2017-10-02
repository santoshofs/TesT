package com.allniv.controller;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;

import java.util.List;
import com.allniv.model.UserModel;
import com.allniv.service.UserService;
import com.allniv.service.UserServiceImpl;

@Path("/user")
public class UserController {
	
	UserService userService = new UserServiceImpl();

	@Path("/getAllUsers")
	@GET
	@Produces("application/json")
	public List<UserModel> getAllUsers()
	{
		return userService.getAllUsers();
	}
	
	
	@Path("/add")
	@GET
	@Consumes("text/html")
	@Produces("text/html")
	public String addUser(
			@QueryParam("name") String name,
			@QueryParam("email") String email,
			@QueryParam("pwd") String pwd
			)
	{
		UserModel userModel = new UserModel();
		userModel.setName(name);
		userModel.setEmail(email);
		userModel.setPwd(pwd);
		return userService.addUser(userModel);
	}
	
}
