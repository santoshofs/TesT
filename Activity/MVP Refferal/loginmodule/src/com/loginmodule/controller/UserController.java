package com.loginmodule.controller;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;

import org.codehaus.jettison.json.JSONObject;

import com.loginmodule.model.User;
import com.loginmodule.service.UserService;
import com.loginmodule.service.UserServiceImpl;

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
	
	
	
	
}
