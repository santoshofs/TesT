package com.loginmodule.dao;

import java.util.List;

import com.loginmodule.model.Location;
import com.loginmodule.util.HibernateUtil;

public class LocationDaoImpl  implements LocationDao {
	HibernateUtil hibernateUtil = new HibernateUtil();
	
	
	@Override
	public List<Location> getAllLocation() {
		hibernateUtil.openCurrentSession();
			
		List<Location> user_records =(List<Location>)hibernateUtil.getCurrentSession().createQuery("from Location").list();
		
		hibernateUtil.closeCurrentSession();
		return user_records;
	}
	
	
	
	
	public static void main(String aa[])
	{
		LocationDaoImpl locationDaoImpl = new LocationDaoImpl();
		List<Location> user_records = locationDaoImpl.getAllLocation();
		for(Location um:user_records) {
		System.out.println(um.getLid()+"  "+um.getLatitude()+"   "+um.getLongitude()+"  "+um.getBrand()+"  "+um.getLocation());
	}
	}
}
	
