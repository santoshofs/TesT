package com.mvp.service;

import java.util.List;

import com.mvp.model.Booking;
import com.mvp.model.City;

public interface BookingService {
	
	public List<City> getAllBookings();

	public String addBooking(Booking booking);

}
