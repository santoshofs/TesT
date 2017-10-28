package com.mvp.dao;

import java.util.List;

import com.mvp.model.Hotel;
import com.mvp.util.HibernateUtil;

public class HotelDaoImpl implements HotelDao{
	
	HibernateUtil hibernateUtil = new HibernateUtil();
	
	@Override
	public List<Hotel> getAllHotel() {
		
		hibernateUtil.openCurrentSession();
		List<Hotel> hotel =(List<Hotel>)hibernateUtil.getCurrentSession().createQuery("from Hotel where city_id = 2").list();
		hibernateUtil.closeCurrentSession();
		return hotel;
		
	}
		
	public static void main(String aaa[])
	{
		HotelDaoImpl hotelDaoImpl = new HotelDaoImpl();
		List<Hotel> hotel = hotelDaoImpl.getAllHotel();
		for(Hotel um:hotel)
		System.out.println(um.getId()+"    "+um.getName()+"   "+um.getAddress()+"    "+um.getContactno()+"  "+um.getCity());
	}

}
