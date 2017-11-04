package com.SanTech.dao;

import java.io.UnsupportedEncodingException;
import java.net.UnknownHostException;
import java.security.NoSuchAlgorithmException;

import com.SanTech.model.BookingModel;
import com.SanTech.model.UserModel;
import com.SanTech.service.BookingService;
import com.SanTech.service.BookingServiceImplementer;
import com.SanTech.service.UserService;
import com.SanTech.service.UserServiceImplementer;
import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.MongoClient;

public class BookingDetailsDaoImplementer implements BookingDetailsDao{
	@Override
	public DBCollection getBookingDetailsCollection() throws UnknownHostException {
		MongoClient mongo = new MongoClient("localhost", 27017);
		DB mongoDB = mongo.getDB("SanTechLastMongoDB");
		return mongoDB.getCollection("booking_details");
	}

	@Override
	public Boolean insertDataForBooking(BookingModel booking)
			throws UnknownHostException, NoSuchAlgorithmException, UnsupportedEncodingException {
		BookingService service = new BookingServiceImplementer();
		Boolean status;
		DBCollection collection = getBookingDetailsCollection();
		/*BasicDBObject existing = new BasicDBObject();
		String encryptPassword = new String();
		existing.put("email", booking.getEmail());
		DBCursor cursor = collection.find(existing);*/
//		if (!cursor.hasNext()) {
		{
			BasicDBObject newDocument = new BasicDBObject();
			newDocument.append("UserName", booking.getU_name());
			newDocument.append("UserMail", booking.getU_mail());
			newDocument.append("PassengerName", booking.getP_name());
			newDocument.append("PassengerAge", booking.getP_age());
			newDocument.append("TravelDate", booking.getT_date());
			newDocument.append("FlightName", booking.getF_name());
			newDocument.append("From", booking.getF_from());
			newDocument.append("To", booking.getF_to());
			newDocument.append("DepartureTime", booking.getF_departure_time());
			newDocument.append("ArrivalTime", booking.getF_arrival_time());
			newDocument.append("Price", booking.getF_price());			
//			encryptPassword = service.Md5Encrypt(booking.getPassword());
//			newDocument.append("password", encryptPassword);
			
			collection.insert(newDocument);
			status = true;
			System.out.println("Booking IN");
		} 
//		else {
//			status = false;
//		}
		return status;
	}

//	@Override
//	public UserModel fetchRowByEmail(UserModel user) throws UnknownHostException {
//		DBCollection collection = getUserDetailsCollection();
//		UserModel gotUser = new UserModel();
//		BasicDBObject query = new BasicDBObject();
//		query.put("email", user.getEmail());
//		DBCursor cursor = collection.find(query);
//		if (cursor.hasNext()) {
//			BasicDBObject holder = (BasicDBObject) cursor.next();
//			gotUser.setEmail(holder.getString("email"));
//			gotUser.setId(holder.getString("_id"));
//			gotUser.setName(holder.getString("name"));
//			gotUser.setPassword(holder.getString("password"));
//			gotUser.setPhone(holder.getString("phone"));
//			gotUser.setRole(holder.getString("role"));
//		}
//		return gotUser;
//	}

}
