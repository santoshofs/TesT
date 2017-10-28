package com.mvp.controller;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;

import java.util.List;
import com.mvp.model.Hotel;
import com.mvp.service.HotelService;
import com.mvp.service.HotelServiceImpl;

@Path("/hotel")
public class HotelController {
	
	HotelService hotelService = new HotelServiceImpl();

	@Path("/getAllHotels")
	@GET
	@Produces("application/json")
	public List<Hotel> getAllHotels()
	{
		return hotelService.getAllHotels();
	}
	
}
