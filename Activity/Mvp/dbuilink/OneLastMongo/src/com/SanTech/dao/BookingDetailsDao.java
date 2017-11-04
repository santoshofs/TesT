package com.SanTech.dao;

import java.io.UnsupportedEncodingException;
import java.net.UnknownHostException;
import java.security.NoSuchAlgorithmException;

import com.SanTech.model.BookingModel;
import com.SanTech.model.BookingResponse;
import com.SanTech.model.FlightModel;
import com.SanTech.model.ResponseWithFlightCollection;
import com.mongodb.DBCollection;

public interface BookingDetailsDao {
	public DBCollection getBookingDetailsCollection() throws UnknownHostException;

	public Boolean insertDataForBooking(BookingModel booking)
			throws UnknownHostException, NoSuchAlgorithmException, UnsupportedEncodingException;
	public BookingResponse fetchRowByUserMail(BookingModel booking) throws UnknownHostException;


}
