package com.devote.crm.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.devote.crm.bean.User;
import com.devote.crm.dao.UserDao;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	private UserDao userDao;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User u = userDao.findByEmail(username);
		
		if(u == null)
			throw new UsernameNotFoundException("User: " + username + " not found!");
		
		return u;
	}

}
