package com.mvp.service;

import java.util.List;
import com.mvp.model.City;
import com.mvp.dao.CityDao;
import com.mvp.dao.CityDaoImpl;

public class CityServiceImpl implements CityService{
	
	CityDao cityDao = new CityDaoImpl();
	
	@Override
	public List<City> getAllCities() {
		
		return cityDao.getAllCity();
	}

}
