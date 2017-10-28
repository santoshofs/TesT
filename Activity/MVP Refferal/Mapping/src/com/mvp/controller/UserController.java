package com.mvp.controller;

import java.io.UnsupportedEncodingException;
import java.util.Base64;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;

import org.codehaus.jettison.json.JSONObject;

import com.mvp.model.User;
import com.mvp.service.UserService;
import com.mvp.service.UserServiceImpl;
import com.mvp.model.User;

@Path("/user")
public class UserController {
	
	UserService userService = new UserServiceImpl();

	@Path("/auth")
	@GET
	@Produces("application/json")
	public String authUserByEmail(
			@QueryParam("email") String email,
			@QueryParam("pwd") String pwd			
			) throws Exception
	{
		User user = userService.findUserByEmail(email);
		
		String response="";
		JSONObject jsonObject = new JSONObject();
		
		if(email.equalsIgnoreCase(user.getEmail()) && pwd.equalsIgnoreCase(user.getPwd()))		{
		
		jsonObject.put("Status", "Success");
		jsonObject.put("name", user.getName());
		jsonObject.put("email", user.getEmail());
		jsonObject.put("uid", user.getUid());
		
		response = jsonObject.toString();
	
		}
		else{
			
			jsonObject.put("Status","Failure");			
			response = jsonObject.toString();
			
		}
		
		return response;
	}
	
	@POST
	@Path("/add")
	@Produces("application/json")
	public String addUsers(User user) throws UnsupportedEncodingException {
		
		String encryptedpassword = Base64.getEncoder().encodeToString(user.getPwd().getBytes("utf-8"));
		user.setPwd(encryptedpassword);
		user.setIsActive(1);
		return userService.addUser(user);
	}
	
}
