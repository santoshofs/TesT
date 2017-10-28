package com.mvp.dao;

import java.util.List;

import com.mvp.model.City;
import com.mvp.util.HibernateUtil;

public class CityDaoImpl implements CityDao {
	
	HibernateUtil hibernateUtil = new HibernateUtil();	

	@Override
	public List<City> getAllCity() {
		hibernateUtil.openCurrentSession();
		List<City> city =(List<City>)hibernateUtil.getCurrentSession().createQuery("from CityModel").list();		
		hibernateUtil.closeCurrentSession();
		return city;
	}
	
	public static void main(String aaa[]){
		CityDaoImpl cityDaoImpl = new CityDaoImpl();
		List<City> city = cityDaoImpl.getAllCity();
		for(City um:city)
		System.out.println(um.getId()+"    "+um.getName());
	}

}
