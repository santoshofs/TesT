package com.santech.controller;

import java.io.UnsupportedEncodingException;
import java.net.URISyntaxException;
import java.net.UnknownHostException;
import java.security.NoSuchAlgorithmException;

import javax.ws.rs.FormParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;

import com.santech.model.UserModel;
import com.santech.service.UserService;
import com.santech.service.UserServiceImplementer;

@Path("/control")
public class UserController {
	@Path("/newUser")
	@POST
	public Response addingNewUser(@FormParam("name") String name, @FormParam("email") String email,
			@FormParam("pwd") String pwd, @FormParam("phone") String phone)
			throws UnknownHostException, UnsupportedEncodingException, NoSuchAlgorithmException, URISyntaxException {
		UserService userService = new UserServiceImplementer();
		UserModel userModel = new UserModel();
		userModel.setName(name);
		userModel.setEmail(email);
		userModel.setPassword(pwd);
		userModel.setPhone(phone);
		System.out.println("details in");
		return userService.addNewUser(userModel);
		
	}

	@POST
	@Path("/userLogin")
	public Response userLogin(@FormParam("email") String email, @FormParam("pwd") String password)
			throws UnknownHostException, NoSuchAlgorithmException, UnsupportedEncodingException, URISyntaxException {
		UserModel user = new UserModel();
		UserService userService = new UserServiceImplementer();
		user.setEmail(email);
		user.setPassword(password);

		return userService.userLoginCheck(user);
	}
}