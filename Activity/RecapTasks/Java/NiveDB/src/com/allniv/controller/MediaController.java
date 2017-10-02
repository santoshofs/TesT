package com.allniv.controller;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.UnknownHostException;
import java.util.HashMap;
import java.util.Set;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.HeaderParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.ResponseBuilder;

import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.DBObject;
import com.mongodb.MongoClient;
import com.mongodb.gridfs.GridFS;
import com.mongodb.gridfs.GridFSDBFile;
import com.mongodb.gridfs.GridFSInputFile;

import com.sun.jersey.core.header.FormDataContentDisposition;
import com.sun.jersey.multipart.FormDataParam;


@Path("/media")
public class MediaController {
	
	Response response = null;
	
	
	@Path("/upload")
	@POST
	@Consumes(MediaType.MULTIPART_FORM_DATA)
	@Produces("text/html")
	public String uploadFile(
			@FormDataParam("file") InputStream fis,
			@FormDataParam("file") FormDataContentDisposition fileInputDetails,
			@FormDataParam("fileId") String fileId
			) throws UnknownHostException{
		String status="";
		MongoClient mongoClient = new MongoClient("localhost", 27017);
		DB mongoDB = mongoClient.getDB("testdb");

		//Let's store the standard data in regular collection
		DBCollection collection = mongoDB.getCollection("mycollection");

		BasicDBObject query = new BasicDBObject();
		query.put("_id", fileId);
		DBCursor cursor = collection.find(query);

		if (!cursor.hasNext()) {
			// Build our document and add all the fields
			BasicDBObject document = new BasicDBObject();
			document.append("_id", fileId);
			document.append("filename", fileInputDetails.getFileName());


			//insert the document into the collection 
			collection.insert(document);

			// Now let's store the binary file data using media GridFS  
			GridFS fileStore = new GridFS(mongoDB, "media");
			GridFSInputFile inputFile = fileStore.createFile(fis);
			inputFile.setId(fileId);
			inputFile.setFilename(fileInputDetails.getFileName());
			inputFile.save();

			 status = "Sucessfully Uploaded!";

			

			
			
		} else {
			 status = "Unable to insert record with ID: " + fileId +" as record already exists!!!";
			//logger.info(status);
						
		}
		
		//return Response.status(200).entity(status).build();
		
		return status;
		
	}
	
	@GET
	@Produces("video/mp4")
	@Path("/streamVideo/{id}")
	public Response streamVideo(@HeaderParam("Range") String range,
			@PathParam ("id") String id
			)  {
		
		try{
		MediaStreamer medaiStreamer = new MediaStreamer();
		
		MongoClient mongoClient = new MongoClient("localhost", 27017);
		DB mongoDB = mongoClient.getDB("testdb");

		//Let's store the standard data in regular collection
		DBCollection collection = mongoDB.getCollection("mycollection");

		

		BasicDBObject query = new BasicDBObject();
		query.put("_id", id);
		DBObject doc = collection.findOne(query);
		DBCursor cursor = collection.find(query);

		if (cursor.hasNext()) {

			Set<String> allKeys = doc.keySet();
			HashMap<String, String> fields = new HashMap<>();
			for (String key: allKeys) {
				fields.put(key, doc.get(key).toString());
			}


		
			
			GridFS fileStore = new GridFS(mongoDB, "mycollection");
			
			
			
			GridFSDBFile gridFile = fileStore.findOne(query);
			
			 File file = new File(" .wmv");
			gridFile.writeTo(file);	

			
				  
				//  File audio = new File("D:\\Wildlife.wmv");
			       
				  response = medaiStreamer.buildStream(file, range);
				  
		} 
		
		
		}catch(Exception e)
		{
			
		}
		return response;
	        

		
	}

}

