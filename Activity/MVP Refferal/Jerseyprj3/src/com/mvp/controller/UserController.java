
	package com.mvp.controller;

	import javax.ws.rs.Consumes;
	import javax.ws.rs.GET;
	import javax.ws.rs.Path;
	import javax.ws.rs.Produces;
	import javax.ws.rs.QueryParam;

	import java.util.List;
	import com.mvp.model.UserModel;
	import com.mvp.service.UserService;
	import com.mvp.service.UserServiceImpl;

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
				@QueryParam("place") String place,
				@QueryParam("pwd") String pwd
				)
		{
			UserModel userModel = new UserModel();
			
			
			
			return userService.addUser(userModel);
		} 
		
	}


