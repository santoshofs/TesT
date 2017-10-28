package com.mvp.dao;

import java.util.List;

import com.mvp.model.Booking;
import com.mvp.model.City;

public interface BookingDao {
	
	public List<City> getAllBooking();
	public String addBooking(Booking booking);

}
