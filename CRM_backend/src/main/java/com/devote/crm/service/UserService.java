package com.devote.crm.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.devote.crm.bean.User;
import com.devote.crm.dao.UserDao;
import com.devote.crm.http.Response;

@Service
public class UserService {

	@Autowired
	private UserDao userDao;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	public List<User> getAll() {
		return userDao.findAll();
	}
	
	public Response addUser(User user) {
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		user.setProfiles(user.getProfiles());
		userDao.save(user);
		return new Response(true);
	}
}
