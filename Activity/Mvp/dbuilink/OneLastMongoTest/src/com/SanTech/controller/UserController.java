package com.SanTech.controller;

import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.net.URISyntaxException;
import java.net.UnknownHostException;
import java.security.NoSuchAlgorithmException;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.HeaderParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

//import com.carshop.model.CarModel;
//import com.carshop.model.ResponseWithCarCollection;
//import com.carshop.model.ResponseWithCarData;
import com.SanTech.model.UserResponse;
import com.SanTech.model.FlightModel;
import com.SanTech.model.ResponseWithFlightCollection;
import com.SanTech.model.UserModel;
import com.SanTech.service.FlightService;
import com.SanTech.service.FlightServiceImplementer;
//import com.carshop.service.CarService;
//import com.carshop.service.CarServiceImplement;
import com.SanTech.service.UserService;
import com.SanTech.service.UserServiceImplementer;
import com.sun.jersey.core.header.FormDataContentDisposition;
import com.sun.jersey.multipart.FormDataParam;

@Path("/control")
public class UserController {
	@Path("/newUser")
	@POST
	@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
	@Produces("application/json")
	public UserResponse addingNewUser(@FormParam("name") String name, @FormParam("email") String email,
			@FormParam("pwd") String pwd, @FormParam("phone") String phone, @Context HttpServletRequest req)
			throws UnknownHostException, UnsupportedEncodingException, NoSuchAlgorithmException, URISyntaxException {
		UserService userService = new UserServiceImplementer();
		UserModel userModel = new UserModel();
		userModel.setName(name);
		userModel.setEmail(email);
		userModel.setPassword(pwd);
		userModel.setPhone(phone);
		return userService.addNewUser(userModel, req);
	}

	@POST
	@Path("/userLogin")
	@Produces("application/json")
	public UserResponse userLogin(@FormParam("mail") String email, @FormParam("pwd") String password,
			@Context HttpServletRequest req)
			throws UnknownHostException, NoSuchAlgorithmException, UnsupportedEncodingException, URISyntaxException {
		UserModel user = new UserModel();
		UserService userService = new UserServiceImplementer();
		user.setEmail(email);
		user.setPassword(password);

		return userService.userLoginCheck(user, req);
	}

//	@POST
//	@Path("/checkSession")
//	public String checkSession(@FormParam("session") String availedSession, @Context HttpServletRequest req) {
//		UserService userService = new UserServiceImplementer();
//		return userService.checkUserSession(availedSession, req);
//	}

//	@Path("/getRidOfSession")
//	@GET
//	public Response signOutUser(@Context HttpServletRequest req) {
//		UserService userService = new UserServiceImplementer();
//		return userService.lossSession(req);
//	}

	@GET
	@Produces("application/json")
	@Path("/getAllFlights")
	public ResponseWithFlightCollection getAllFlights() throws UnknownHostException {
		FlightService flightService = new FlightServiceImplementer();
		return flightService.getAllFlightDetails();
	}
	
	@POST
	@Path("/flightSearch")
	@Produces("application/json")
	public ResponseWithFlightCollection flightSearch(@FormParam("flight_from") String flight_from, @FormParam("flight_to") String flight_to,
			@Context HttpServletRequest req)
			throws UnknownHostException, NoSuchAlgorithmException, UnsupportedEncodingException, URISyntaxException {
		FlightModel flight = new FlightModel();
		FlightService FlightService = new FlightServiceImplementer();
		flight.setFlight_from(flight_from);
		flight.setFlight_to(flight_to);

		return FlightService.flightSearchCheck(flight, req);
	}
	
	@POST
	@Path("/checkSession")
	public String checkSession(
			@FormParam("session") String availedSession,
			@Context HttpServletRequest req
			){
		UserService userService = new UserServiceImplementer();
		return userService.checkUserSession(availedSession,req);
	}

	@Path("/getRidOfSession")
	@GET
	public Response signOutUser(
			@Context HttpServletRequest req
			){
		UserService userService = new UserServiceImplementer();
		return userService.lossSession(req);
	}
	
}
