package com.SanTech.service;

import java.io.UnsupportedEncodingException;
import java.net.URISyntaxException;
import java.net.UnknownHostException;
import java.security.NoSuchAlgorithmException;

import javax.servlet.http.HttpServletRequest;

import com.SanTech.model.BookingModel;
import com.SanTech.model.BookingResponse;
import com.SanTech.model.FlightModel;
import com.SanTech.model.ResponseWithFlightCollection;

public interface BookingService {
	public BookingResponse addingNewBooking(BookingModel booking, HttpServletRequest req)
			throws UnknownHostException, UnsupportedEncodingException, NoSuchAlgorithmException, URISyntaxException;
	public BookingResponse bookingSearchCheck(BookingModel flight, HttpServletRequest req)
			throws UnknownHostException, NoSuchAlgorithmException, UnsupportedEncodingException, URISyntaxException;
}
