package com.loginmodule.service;

import java.util.List;

import com.loginmodule.dao.LocationDao;
import com.loginmodule.dao.LocationDaoImpl;
import com.loginmodule.model.Location;

public class LocationServiceImpl implements LocationService {

	LocationDao LocationDao = new LocationDaoImpl();
	

	@Override
	public List<Location> getAllLocation() {
		
		return LocationDao.getAllLocation();
	}

}
