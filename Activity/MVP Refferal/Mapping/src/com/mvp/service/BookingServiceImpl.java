package com.mvp.service;

import java.util.List;

import com.mvp.dao.BookingDao;
import com.mvp.dao.BookingDaoImpl;
import com.mvp.model.Booking;
import com.mvp.model.City;

public class BookingServiceImpl implements BookingService{
	
	BookingDao bookingDao = new BookingDaoImpl();

	@Override
	public List<City> getAllBookings() {
		
		return bookingDao.getAllBooking();
	}

	@Override
	public String addBooking(Booking booking) {
		
		return bookingDao.addBooking(booking);
	}

}
