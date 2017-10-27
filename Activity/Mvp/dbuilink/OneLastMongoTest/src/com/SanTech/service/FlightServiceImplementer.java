package com.SanTech.service;
import java.io.File;
import java.io.InputStream;
import java.net.UnknownHostException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.ws.rs.core.Response;

import com.SanTech.dao.FlightDetailsDao;
import com.SanTech.dao.FlightDetailsDao;
import com.SanTech.dao.FlightDetailsDaoImplementer;
import com.SanTech.model.FlightModel;
import com.SanTech.model.ResponseWithFlightCollection;
//import com.SanTech.model.ResponseWithFlightData;
import com.sun.jersey.core.header.FormDataContentDisposition;


public class FlightServiceImplementer implements FlightService{
	FlightDetailsDao flightDetailsDao = new FlightDetailsDaoImplementer();
	@Override
	public ResponseWithFlightCollection getAllFlightDetails() throws UnknownHostException {
		ResponseWithFlightCollection flights = flightDetailsDao.fetchAllFlights();
		return flights;
	}
}
