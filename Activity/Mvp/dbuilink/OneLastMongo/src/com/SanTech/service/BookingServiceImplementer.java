package com.SanTech.service;

import java.io.UnsupportedEncodingException;
import java.net.URISyntaxException;
import java.net.UnknownHostException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.ws.rs.core.Response;

import com.SanTech.dao.BookingDetailsDao;
import com.SanTech.dao.BookingDetailsDaoImplementer;

import com.SanTech.model.BookingModel;
import com.SanTech.model.BookingResponse;
import com.SanTech.model.FlightModel;
import com.SanTech.model.ResponseWithFlightCollection;


public class BookingServiceImplementer implements BookingService {
	BookingDetailsDao bookingDetails = new BookingDetailsDaoImplementer();

	@Override
	public BookingResponse addingNewBooking(BookingModel booking, HttpServletRequest req)
			throws UnknownHostException, UnsupportedEncodingException, NoSuchAlgorithmException, URISyntaxException {
		BookingResponse resp = new BookingResponse();
		if (bookingDetails.insertDataForBooking(booking)) {
//			BookingModel gotUser = bookingDetails.fetchRowByEmail(booking);
			resp.status = "success";
//			String encyPassword = Md5Encrypt(booking.getPassword());
//			booking.setPassword(encyPassword);
//			resp.user = gotUser;
//			setBookingSession(req, gotUser);
		} else {
			resp.status = "failed";
		}
		return resp;
	}
	
	@Override
	public BookingResponse bookingSearchCheck(BookingModel booking, HttpServletRequest req)
			throws UnknownHostException, NoSuchAlgorithmException, UnsupportedEncodingException, URISyntaxException {
		BookingResponse gotBooking = new BookingResponse();
		gotBooking = bookingDetails.fetchRowByUserMail(booking);
		
		return gotBooking;

	}
}
