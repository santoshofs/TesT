package com.loginmodule.controller;



import java.net.UnknownHostException;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
//import javax.ws.rs.consume;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;

import org.codehaus.jettison.json.JSONObject;

import com.loginmodule.model.User;
import com.loginmodule.service.UserService;
import com.loginmodule.service.UserServiceImpl;
import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.DBObject;
import com.mongodb.MongoClient;
import com.sun.jersey.multipart.FormDataParam;
import javax.ws.rs.core.MediaType;

@Path("/user")
public class UserController {

	UserService userService = new UserServiceImpl();

	@Path("/auth")
	@GET
	@Produces("application/json")
	public String authUserByEmail(
			@QueryParam("email") String email,
			@QueryParam("pwd") String pwd			
			) throws Exception
	{
		 //User user = userService.findUserByEmail(email);
		
		MongoClient mongoClient = new MongoClient("localhost", 27017);
		DB mongoDB = mongoClient.getDB("mydb");
		//Let's store the standard data in regular collection
		DBCollection collection = mongoDB.getCollection("tbl_user3");
		//BasicDBObject query = new BasicDBObject();
		//DBObject dbo = collection.findOne();
		//query.get("email");
		//query.get("password");
		JSONObject jsonObject = new JSONObject();
		String response="";
		
		BasicDBObject query = new BasicDBObject();
		query.put("email", email);
		query.put("password", pwd);
		DBCursor cursor = collection.find(query);
		if (cursor.hasNext()) {
		DBObject dbo = cursor.next();	
		
		String username = (String) dbo.get("email");
		String pass= (String) dbo.get("password");
		String user=(String) dbo.get("name");
		System.out.println(username);
		System.out.println(pass);
		
		
		//if(email.equalsIgnoreCase(user.getEmail()) && pwd.equals(user.getPwd()))		
		//if(username.equals(email) && pass.equals(pwd)){

			jsonObject.put("Status", "Success");
			jsonObject.put("name", user);
			/*jsonObject.put("email", user.getEmail());
			jsonObject.put("uid", user.getUid());*/ 
			
			response = jsonObject.toString();
			System.out.println(response);
			return response;
			
		}
		else{

			jsonObject.put("Status","Failure");			
			response = jsonObject.toString();
			System.out.println(response);
			return response;
			
		}
		
		}
		

	/*@Path("/add")
	@POST
	@Consumes(MediaType.MULTIPART_FORM_DATA)
	@Produces("text/html")
	public String saveUser(
			@FormDataParam("name") String userName,
			@FormDataParam("email") String email,
			@FormDataParam("password") String password
			) throws UnknownHostException
	{
		User user = new User();
		user.setName(userName);
		user.setEmail(email);
		user.setPwd(password);
		user.setIsActive(1);
		//for insert into rdbms
		//int uid = userService.saveUser(user);

		// for mongo insert
		MongoClient mongoClient = new MongoClient("localhost", 27017);
		DB mongoDB = mongoClient.getDB("mydb");
		//Let's store the standard data in regular collection
		DBCollection collection = mongoDB.getCollection("tbl_user3");
		BasicDBObject query = new BasicDBObject();
	//	query.put("_id", 1);
		query.put("name", userName);
		query.put("email", email);
		query.put("password", password);
		DBCursor cursor = collection.find(query);
		if (!cursor.hasNext()) {
			// Build our document and add all the fields
			BasicDBObject document = new BasicDBObject();

			//  document.append("_id", fileId);
			      document.append("name", userName);
			      document.append("email", email);
			      document.append("password", password);

			//insert the document into the collection 
			collection.insert(document);
			String status = "Sucessfully Uploaded!";
		}
		return "User Successfully saved ";
	}

*/

	@Path("/add")
	@POST
	@Consumes(MediaType.MULTIPART_FORM_DATA)
	@Produces("text/html")
	public String saveUser(
			@FormDataParam("uid") int uid,
			@FormDataParam("userName") String userName,
			@FormDataParam("email") String email,
			@FormDataParam("password") String password
			) throws UnknownHostException
	{
		User user = new User();
		user.setUid(uid);
		user.setName(userName);
		user.setEmail(email);
		user.setPwd(password);
		user.setIsActive(1);
		//for insert into rdbms
		//int uid = userService.saveUser(user);

		// for mongo insert
		MongoClient mongoClient = new MongoClient("localhost", 27017);
		DB mongoDB = mongoClient.getDB("mydb");
		//Let's store the standard data in regular collection
		DBCollection collection = mongoDB.getCollection("tbl_user3");
		BasicDBObject query = new BasicDBObject();
	//	query.put("_id", 1);
		

		query.put("uid", uid);
		query.put("name", userName);
		query.put("email", email);
		query.put("password", password);
		DBCursor cursor = collection.find(query);
		if (!cursor.hasNext()) {
			// Build our document and add all the fields
			BasicDBObject document = new BasicDBObject();

			//  document.append("_id", fileId);
			document.append("uid", uid);
			      document.append("name", userName);
			      document.append("email", email);
			      document.append("password", password);
			      document.append("isactive",true);

			//insert the document into the collection 
			collection.insert(document);

		}
		return "User Successfully saved ";
	}


	// return "User Successfully saved with uid :"+uid;
}


