package com.SanTech.dao;

import java.net.UnknownHostException;
import com.SanTech.model.FlightModel;
import com.SanTech.model.ResponseWithFlightCollection;

public interface FlightDetailsDao {
	public ResponseWithFlightCollection fetchAllFlights() throws UnknownHostException;

	public ResponseWithFlightCollection fetchRowByDestinations(FlightModel flight) throws UnknownHostException;
}
