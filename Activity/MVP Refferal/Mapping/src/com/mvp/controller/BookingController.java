package com.mvp.controller;

import java.io.UnsupportedEncodingException;
import java.util.Base64;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;

import org.codehaus.jettison.json.JSONObject;

import com.mvp.model.Booking;
import com.mvp.model.City;
import com.mvp.model.Room;
import com.mvp.model.User;
import com.mvp.service.BookingService;
import com.mvp.service.BookingServiceImpl;
import com.mvp.model.Booking;

@Path("/user")
public class BookingController {
	
	BookingService bookingService = new BookingServiceImpl();
	
	@Path("/getAllBookings")
	@GET
	@Produces("application/json")
	public List<City> getAllCities() {
		
		return bookingService.getAllBookings();
	}

//	@Path("/auth")
//	@GET
//	@Produces("application/json")
//	public String authUserByEmail(
//			@QueryParam("email") String email,
//			@QueryParam("pwd") String pwd			
//			) throws Exception
//	{
//		Booking user = userService.findUserByEmail(email);
//		
//		String response="";
//		JSONObject jsonObject = new JSONObject();
//		
//		if(email.equalsIgnoreCase(user.getEmail()) && pwd.equalsIgnoreCase(user.getPwd()))		{
//		
//		jsonObject.put("Status", "Success");
//		jsonObject.put("id", user.getId());
//		jsonObject.put("checkin", user.getCheckin());
//		jsonObject.put("checkout", user.getCheckout());
//		
//		response = jsonObject.toString();
//	
//		}
//		else{
//			
//			jsonObject.put("Status","Failure");			
//			response = jsonObject.toString();
//			
//		}
//		
//		return response;
//	}
//	
//	@POST
//	@Path("/add")
//	@Produces("application/json")
//	public String addUsers(Booking user) throws UnsupportedEncodingException {
//		
////		String encryptedpassword = Base64.getEncoder().encodeToString(user.getPwd().getBytes("utf-8"));
//		user.setPwd(encryptedpassword);
//		user.setIsActive(1);
//		return userService.addUser(user);
//	}
	@Path("/add")
	@GET
	@Consumes("text/html")
	@Produces("text/html")
	public String addBooking(
			@QueryParam("id") int id,
			@QueryParam("checkin") String checkin,
			@QueryParam("checkout") String checkout,
			@QueryParam("status") String status,
			@QueryParam("user") User user,
			@QueryParam("room") Room room
			)
	{
		Booking booking = new Booking();
		booking.setId(id);
		booking.setCheckin(checkin);
		booking.setCheckout(checkout);
		booking.setStatus(status);
		booking.setUser(user);
		booking.setRoom(room);
		return bookingService.addBooking(booking);
	}
	
	
}
