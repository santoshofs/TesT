package com.SanTech.service;

import java.io.UnsupportedEncodingException;
import java.net.URISyntaxException;
import java.net.UnknownHostException;
import java.security.NoSuchAlgorithmException;
import javax.servlet.http.HttpServletRequest;
import com.SanTech.model.FlightModel;
import com.SanTech.model.ResponseWithFlightCollection;

public interface FlightService {
	public ResponseWithFlightCollection getAllFlightDetails() throws UnknownHostException;

	public ResponseWithFlightCollection flightSearchCheck(FlightModel flight, HttpServletRequest req)
			throws UnknownHostException, NoSuchAlgorithmException, UnsupportedEncodingException, URISyntaxException;

	public void setFlightSession(HttpServletRequest req, FlightModel flight);

}
