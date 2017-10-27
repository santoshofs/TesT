package com.SanTech.service;

import java.io.InputStream;
import java.net.UnknownHostException;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.core.Response;

import com.SanTech.model.FlightModel;
import com.SanTech.model.ResponseWithFlightCollection;
//import com.SanTech.model.ResponseWithCarData;
import com.sun.jersey.core.header.FormDataContentDisposition;

public interface FlightService {
	public ResponseWithFlightCollection getAllFlightDetails() throws UnknownHostException;

}
