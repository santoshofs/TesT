
package com.mvp.dao;

import java.util.List;

import com.mvp.model.Booking;
import com.mvp.model.City;
import com.mvp.util.HibernateUtil;

public class BookingDaoImpl implements BookingDao{
	
	HibernateUtil hibernateUtil = new HibernateUtil();

	@Override
	public List<City> getAllBooking() {
		hibernateUtil.openCurrentSession();
		List<City> city =(List<City>)hibernateUtil.getCurrentSession().createQuery("from Booking").list();		
		hibernateUtil.closeCurrentSession();
		return city;
	}
	@Override
	public String addBooking(Booking booking) {
		hibernateUtil.openCurrentSessionwithTransaction();
		Integer id = (Integer)hibernateUtil.getCurrentSession().save(booking);
		hibernateUtil.closeCurrentSessionwithTransaction();
		return "User record saved successfully with id:"+id;
	}
}
