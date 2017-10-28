package com.mvp.controller;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;

import java.util.List;
import com.mvp.model.Room;
import com.mvp.service.RoomService;
import com.mvp.service.RoomServiceImpl;

@Path("/room")
public class RoomController {
	
	RoomService roomService = new RoomServiceImpl();

	@Path("/getAllRooms")
	@GET
	@Produces("application/json")
	public List<Room> getAllRooms()
	{
		return roomService.getAllRooms();
	}
	
}
