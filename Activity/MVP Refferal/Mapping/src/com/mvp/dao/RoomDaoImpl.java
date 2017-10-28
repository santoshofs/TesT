package com.mvp.dao;

import java.util.List;
import com.mvp.model.Room;
import com.mvp.util.HibernateUtil;

public class RoomDaoImpl implements RoomDao{
	
	HibernateUtil hibernateUtil = new HibernateUtil();
	
	@Override
	public List<Room> getAllRoom() {
		
		hibernateUtil.openCurrentSession();
		List<Room> room =(List<Room>)hibernateUtil.getCurrentSession().createQuery("from RoomModel").list();
		hibernateUtil.closeCurrentSession();
		return room;
	}
	
	public static void main(String aaa[]) {
		
		RoomDaoImpl roomDaoImpl = new RoomDaoImpl();
		List<Room> room = roomDaoImpl.getAllRoom();
		for(Room um:room)
		System.out.println(um.getId()+"    "+um.getType()+"   "+um.getPrice()+"    "+um.getNof_rooms());
		
	}

}
