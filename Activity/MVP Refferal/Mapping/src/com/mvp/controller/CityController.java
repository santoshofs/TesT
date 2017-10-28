package com.mvp.controller;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import java.util.List;
import com.mvp.model.City;
import com.mvp.service.CityService;
import com.mvp.service.CityServiceImpl;

@Path("/city")
public class CityController {
	
	CityService cityService = new CityServiceImpl();

	@Path("/getAllCities")
	@GET
	@Produces("application/json")
	public List<City> getAllCities() {
		
		return cityService.getAllCities();
	}
	
}
