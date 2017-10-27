package com.SanTech.dao;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.net.UnknownHostException;

import com.SanTech.model.FlightModel;
import com.SanTech.model.ResponseWithFlightCollection;
//import com.SanTech.model.ResponseWithFlightData;
import com.mongodb.DBCollection;
import com.sun.jersey.core.header.FormDataContentDisposition;

public interface FlightDetailsDao {
	public ResponseWithFlightCollection fetchAllFlights() throws UnknownHostException;
}
