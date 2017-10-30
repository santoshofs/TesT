package com.SanTech.service;

import java.io.File;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.net.URISyntaxException;
import java.net.UnknownHostException;
import java.security.NoSuchAlgorithmException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.ws.rs.core.Response;

import com.SanTech.dao.FlightDetailsDao;
import com.SanTech.dao.FlightDetailsDao;
import com.SanTech.dao.FlightDetailsDaoImplementer;
import com.SanTech.model.FlightModel;
import com.SanTech.model.ResponseWithFlightCollection;
import com.SanTech.model.UserModel;
//import com.SanTech.model.UserModel;
import com.SanTech.model.UserResponse;
//import com.SanTech.model.ResponseWithFlightData;
import com.sun.jersey.core.header.FormDataContentDisposition;

public class FlightServiceImplementer implements FlightService {
	FlightDetailsDao flightDetailsDao = new FlightDetailsDaoImplementer();

	@Override
	public ResponseWithFlightCollection getAllFlightDetails() throws UnknownHostException {
		ResponseWithFlightCollection flights = flightDetailsDao.fetchAllFlights();
		return flights;
	}
	@Override
	public ResponseWithFlightCollection flightSearchCheck(FlightModel flight, HttpServletRequest req)
			throws UnknownHostException, NoSuchAlgorithmException, UnsupportedEncodingException, URISyntaxException {
		FlightModel gotFlight = new FlightModel();
		gotFlight = flightDetailsDao.fetchRowByDestinations(flight);
		String checkFlight = (flight.getFlight_to());
		ResponseWithFlightCollection returnFlight = new ResponseWithFlightCollection();
		if (checkFlight.equals(gotFlight.getFlight_to())) {
			returnFlight.status = "success";
			returnFlight.flight = gotFlight;
			setFlightSession(req, gotFlight);
		} else {
			returnFlight.status = "failed";
		}
		return returnFlight;

	}
	@Override
	public void setFlightSession(HttpServletRequest req, FlightModel flight) {
		HttpSession session = req.getSession();
		session.setAttribute("flight", flight.getFlight_id());
	}
	
}

