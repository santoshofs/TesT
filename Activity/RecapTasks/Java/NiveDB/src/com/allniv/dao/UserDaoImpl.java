package com.allniv.dao;

import java.util.List;

import com.allniv.model.UserModel;
import com.allniv.util.HibernateUtil;

public class UserDaoImpl implements UserDao{
	
	HibernateUtil hibernateUtil = new HibernateUtil();
	
	
	@Override
	public String addUser(UserModel user) {
		hibernateUtil.openCurrentSessionwithTransaction();
		Integer id = (Integer)hibernateUtil.getCurrentSession().save(user);
		hibernateUtil.closeCurrentSessionwithTransaction();
		return "User record saved successfully with id:"+id;
	}

	@Override
	public List<UserModel> getAllUserModel() {
		hibernateUtil.openCurrentSession();
		
		List<UserModel> user_records =(List<UserModel>)hibernateUtil.getCurrentSession().createQuery("from UserModel").list();
		
		hibernateUtil.closeCurrentSession();
		return user_records;
	}
	
	
	
	
	public static void main(String aaa[])
	{
		UserDaoImpl userDaoImpl = new UserDaoImpl();
		List<UserModel> user_records = userDaoImpl.getAllUserModel();
		for(UserModel um:user_records)
		System.out.println(um.getId()+"    "+um.getName()+"   "+um.getEmail()+"    "+um.getPwd());
	}
}

