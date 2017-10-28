package com.mvp.service;

import java.util.List;

import com.mvp.model.Room;
import com.mvp.dao.RoomDao;
import com.mvp.dao.RoomDaoImpl;

public class RoomServiceImpl implements RoomService{
	
	RoomDao roomDao = new RoomDaoImpl();
	
	@Override
	public List<Room> getAllRooms() {
		
		return roomDao.getAllRoom();
	}

}
