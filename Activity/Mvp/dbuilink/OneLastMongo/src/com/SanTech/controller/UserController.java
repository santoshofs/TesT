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
import com.SanTech.model.BookingModel;
import com.SanTech.model.BookingResponse;
import com.SanTech.model.FlightModel;
import com.SanTech.model.ResponseWithFlightCollection;
import com.SanTech.model.UserModel;
import com.SanTech.service.BookingService;
import com.SanTech.service.BookingServiceImplementer;
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
	public ResponseWithFlightCollection flightSearch(@FormParam("flight_from") String flight_from,
			@FormParam("flight_to") String flight_to, @Context HttpServletRequest req)
			throws UnknownHostException, NoSuchAlgorithmException, UnsupportedEncodingException, URISyntaxException {
		FlightModel flight = new FlightModel();
		FlightService FlightService = new FlightServiceImplementer();
		flight.setFlight_from(flight_from);
		flight.setFlight_to(flight_to);

		return FlightService.flightSearchCheck(flight, req);
	}

	@POST
	@Path("/checkSession")
	public String checkSession(@FormParam("session") String availedSession, @Context HttpServletRequest req) {
		UserService userService = new UserServiceImplementer();
		return userService.checkUserSession(availedSession, req);
	}

	@Path("/getRidOfSession")
	@GET
	public Response signOutUser(@Context HttpServletRequest req) {
		UserService userService = new UserServiceImplementer();
		return userService.lossSession(req);
	}

	@Path("/booking")
	@POST
	@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
	@Produces("application/json")
	public BookingResponse addingNewBooking(@FormParam("u_name") String u_name, @FormParam("u_mail") String u_mail,
			@FormParam("p_name") String p_name, @FormParam("p_age") String p_age, @FormParam("t_date") String t_date,
			@FormParam("f_name") String f_name, @FormParam("f_from") String f_from, @FormParam("f_to") String f_to,
			@FormParam("f_departure_time") String f_departure_time, @FormParam("f_arrival_time") String f_arrival_time,
			@FormParam("f_price") String f_price, @Context HttpServletRequest req)
			throws UnknownHostException, UnsupportedEncodingException, NoSuchAlgorithmException, URISyntaxException {
		BookingService bookingService = new BookingServiceImplementer();
		BookingModel bookingModel = new BookingModel();
		bookingModel.setU_name(u_name);
		bookingModel.setU_mail(u_mail);
		bookingModel.setP_name(p_name);
		bookingModel.setP_age(p_age);
		bookingModel.setT_date(t_date);
		bookingModel.setF_name(f_name);
		bookingModel.setF_from(f_from);
		bookingModel.setF_to(f_to);
		bookingModel.setF_departure_time(f_departure_time);
		bookingModel.setF_arrival_time(f_arrival_time);
		bookingModel.setF_price(f_price);

		return bookingService.addingNewBooking(bookingModel, req);
	}

	@POST
	@Path("/bookingSearch")
	@Produces("application/json")
	public BookingResponse bookingSearch(@FormParam("u_name") String u_name, @FormParam("u_mail") String u_mail,
			@Context HttpServletRequest req)
			throws UnknownHostException, NoSuchAlgorithmException, UnsupportedEncodingException, URISyntaxException {
		BookingModel booking = new BookingModel();
		BookingService BookingService = new BookingServiceImplementer();
		booking.setU_name(u_name);
		booking.setU_mail(u_mail);

		return BookingService.bookingSearchCheck(booking, req);
	}

}
