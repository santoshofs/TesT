package com.SanTech.service;

import java.io.UnsupportedEncodingException;
import java.net.URISyntaxException;
import java.net.UnknownHostException;
import java.security.NoSuchAlgorithmException;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.core.Response;

import com.SanTech.model.UserResponse;
import com.SanTech.model.UserModel;

public interface UserService {
	// from linux
	public UserResponse addNewUser(UserModel user, HttpServletRequest req)
			throws UnknownHostException, UnsupportedEncodingException, NoSuchAlgorithmException, URISyntaxException;

	public String Md5Encrypt(String data) throws NoSuchAlgorithmException, UnsupportedEncodingException;

	public UserResponse userLoginCheck(UserModel user, HttpServletRequest req)
			throws UnknownHostException, NoSuchAlgorithmException, UnsupportedEncodingException, URISyntaxException;

	public void setUserSession(HttpServletRequest req, UserModel user);
	

	public String checkUserSession(String availedSession, HttpServletRequest req);

	public Response lossSession(HttpServletRequest req);
}
