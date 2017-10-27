package com.loginmodule.controller;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import com.loginmodule.model.Location;
import com.loginmodule.service.LocationService;
import com.loginmodule.service.LocationServiceImpl;

@Path("/location")
public class LocationController {
	LocationService locationService = new LocationServiceImpl();

	@Path("/getAllLocation")
	@GET
	@Produces("application/json")
	public List<Location> getAllLocation()
	{
		return locationService.getAllLocation();
	}
	
}
