package com.SanTech.dao;

import java.io.UnsupportedEncodingException;
import java.net.UnknownHostException;
import java.security.NoSuchAlgorithmException;

//import com.carshop.model.ResponseWithCarData;
import com.SanTech.model.UserModel;
import com.SanTech.service.UserService;
import com.SanTech.service.UserServiceImplementer;
import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.MongoClient;

public class UserDetailsDaoImplementer implements UserDetailsDao {
	@Override
	public DBCollection getUserDetailsCollection() throws UnknownHostException{
		MongoClient mongo = new MongoClient("localhost",27017);
		DB mongoDB = mongo.getDB("SanTechLastMongoDB");
		return mongoDB.getCollection("user_details");
	}
	@Override
	public Boolean insertDataForSignUp(UserModel user) throws UnknownHostException, NoSuchAlgorithmException, UnsupportedEncodingException{
		UserService service = new UserServiceImplementer();
		Boolean status;
		DBCollection collection = getUserDetailsCollection(); 
		BasicDBObject existing = new BasicDBObject();
		String encryptPassword = new String();
		existing.put("email", user.getEmail());
		DBCursor cursor = collection.find(existing);
		if(!cursor.hasNext()){
			BasicDBObject newDocument = new BasicDBObject();
			newDocument.append("name", user.getName());
			newDocument.append("email", user.getEmail());
			newDocument.append("phone", user.getPhone());
//			newDocument.append("region", user.getRegion());
			encryptPassword = service.Md5Encrypt(user.getPassword());
			newDocument.append("password", encryptPassword );
			newDocument.append("role", "user");
			collection.insert(newDocument);
			status = true;
			System.out.println("Data IN");
		}
		else{
			status = false;
		}
		return status;
	}
	@Override
	public UserModel fetchRowByEmail(UserModel user) throws UnknownHostException{
		DBCollection collection = getUserDetailsCollection();
		UserModel gotUser = new UserModel();
		BasicDBObject query = new BasicDBObject();
		query.put("email", user.getEmail());
		DBCursor cursor = collection.find(query);
		if(cursor.hasNext()){
			BasicDBObject holder = (BasicDBObject) cursor.next();
			gotUser.setEmail(holder.getString("email"));
			gotUser.setId(holder.getString("_id"));
			gotUser.setName(holder.getString("name"));
			gotUser.setPassword(holder.getString("password"));
			gotUser.setPhone(holder.getString("phone"));
//			gotUser.setRegion(holder.getString("region"));
			gotUser.setRole(holder.getString("role"));
		}
		return gotUser;
	}
}

