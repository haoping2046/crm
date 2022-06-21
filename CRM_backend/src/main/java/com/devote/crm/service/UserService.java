package com.devote.crm.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.devote.crm.bean.User;
import com.devote.crm.dao.UserDao;

@Service
public class UserService {

	@Autowired
	private UserDao userDao;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	public void addUser(User user) {
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		user.setProfiles(user.getProfiles());
		userDao.save(user);
	}
}
