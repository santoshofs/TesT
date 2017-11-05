package com.SanTech.dao;

import java.io.UnsupportedEncodingException;
import java.net.UnknownHostException;
import java.security.NoSuchAlgorithmException;
import com.SanTech.model.UserModel;
import com.mongodb.DBCollection;

public interface UserDetailsDao {
	public DBCollection getUserDetailsCollection() throws UnknownHostException;

	public Boolean insertDataForSignUp(UserModel user)
			throws UnknownHostException, NoSuchAlgorithmException, UnsupportedEncodingException;

	public UserModel fetchRowByEmail(UserModel user) throws UnknownHostException;

}