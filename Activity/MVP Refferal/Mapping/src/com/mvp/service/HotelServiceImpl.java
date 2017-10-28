package com.mvp.service;

import java.util.List;

import com.mvp.model.Hotel;
import com.mvp.dao.HotelDao;
import com.mvp.dao.HotelDaoImpl;

public class HotelServiceImpl implements HotelService{
	
	HotelDao hotelDao = new HotelDaoImpl();

	@Override
	public List<Hotel> getAllHotels() {
		
		return hotelDao.getAllHotel();
	}

}
