package com.SanTech.dao;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Basic;

import org.bson.types.ObjectId;

import com.mongodb.gridfs.*;
import com.SanTech.model.FlightModel;
import com.SanTech.model.ResponseWithFlightCollection;
import com.SanTech.model.UserModel;
//import com.SanTech.model.ResponseWithFlightData;
import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.MongoClient;
import com.mongodb.gridfs.GridFS;
import com.mongodb.gridfs.GridFSInputFile;
import com.sun.jersey.core.header.FormDataContentDisposition;

public class FlightDetailsDaoImplementer implements FlightDetailsDao {
	public FlightModel allDataSetter(BasicDBObject handler) {
		FlightModel flight = new FlightModel();
		String id = handler.get("_id").toString();
		flight.setFlight_id(id);
		flight.setFlight_name(handler.getString("flight_name"));
		flight.setFlight_arrival_time(handler.getString("flight_arrival_time"));
		flight.setFlight_depature_time(handler.getString("flight_depature_time"));
		flight.setFlight_from(handler.getString("flight_from"));
		flight.setFlight_to(handler.getString("flight_to"));
		flight.setFlight_price(handler.getString("flight_price"));
		flight.setDestination_id(handler.getString("destination_id"));

		return flight;
	}

	public DBCollection getFlightDetailsCollection() throws UnknownHostException {
		MongoClient mongo = new MongoClient("localhost", 27017);
		DB mongoDB = mongo.getDB("SanTechLastMongoDB");
		return mongoDB.getCollection("flight_details");
	}

	@Override
	public ResponseWithFlightCollection fetchAllFlights() throws UnknownHostException {
		DBCollection collection = getFlightDetailsCollection();
		ResponseWithFlightCollection response = new ResponseWithFlightCollection();
		int count = collection.find().count();
		{
			// if(count>15){
			// count=15;
			// }
			if (count != 0) {
				FlightModel[] flights = new FlightModel[count];
				// DBCursor cursor = collection.find().limit(15);
				DBCursor cursor = collection.find();
				int i = 0;
				while (cursor.hasNext()) {
					BasicDBObject handler = (BasicDBObject) cursor.next();
					flights[i] = new FlightModel();
					flights[i] = allDataSetter(handler);
					i++;
				}
				response.status = "success";
				response.flights = flights;
				response.rows = count;
				return response;
			} else {
				response.status = "failure";
				return response;
			}
		}
	}
	
	@Override
	public ResponseWithFlightCollection fetchRowByDestinations(FlightModel flight) throws UnknownHostException {
		DBCollection collection = getFlightDetailsCollection();
		BasicDBObject search = new BasicDBObject();
		ResponseWithFlightCollection response = new ResponseWithFlightCollection();
		BasicDBObject query = new BasicDBObject();
		List<BasicDBObject> searchArguments = new ArrayList<BasicDBObject>();
		   searchArguments.add(new BasicDBObject("flight_from", flight.getFlight_from()));
		   searchArguments.add(new BasicDBObject("flight_to", flight.getFlight_to()));
		query.put("$and", searchArguments);
		DBCursor cursor = collection.find(query);
		int count = collection.find(query).count();
		FlightModel[] flights = new FlightModel[count];
//		if (cursor.hasNext()) {
//			BasicDBObject holder = (BasicDBObject) cursor.next();
//			gotFlight.setFlight_id(holder.getString("flight_id"));
//			gotFlight.setFlight_name(holder.getString("flight_name"));
//			gotFlight.setFlight_arrival_time(holder.getString("flight_arrival_time"));
//			gotFlight.setFlight_depature_time(holder.getString("flight_depature_time"));
//			gotFlight.setFlight_from(holder.getString("flight_from"));
//			gotFlight.setFlight_to(holder.getString("flight_to"));
//			gotFlight.setFlight_price(holder.getString("flight_price"));
//			gotFlight.setDestination_id(holder.getString("destination_id"));
//		}
		int i = 0;
		while (cursor.hasNext()) {
			BasicDBObject handler = (BasicDBObject) cursor.next();
			flights[i] = new FlightModel();
			flights[i] = allDataSetter(handler);
			i++;
		}
		response.status = "success";
		response.flights = flights;
		response.rows = count;
		return response;
//		return gotFlight;
	}
}
