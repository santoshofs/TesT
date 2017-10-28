
package com.mvp.dao;

import com.mvp.model.User;
import com.mvp.util.HibernateUtil;

public class UserDaoImpl implements UserDao {
	
	HibernateUtil hibernateUtil = new HibernateUtil();

	@Override
	public User findUserByEmail(String email) {
		
		hibernateUtil.openCurrentSession();
		User user =(User)hibernateUtil.getCurrentSession().createQuery("from User where email='"+email+"' and isactive=1").uniqueResult();
		hibernateUtil.closeCurrentSession();	
		return user;
		
	}
	
	@Override
	public String addUser(User user) {
		hibernateUtil.openCurrentSessionwithTransaction();
		Integer id = (Integer)hibernateUtil.getCurrentSession().save(user);
		hibernateUtil.closeCurrentSessionwithTransaction();
		return "User record saved successfully with id:"+id;
	}
	
}
