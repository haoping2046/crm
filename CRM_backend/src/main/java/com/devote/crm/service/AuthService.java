package com.devote.crm.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import com.devote.crm.dao.UserDao;
import com.devote.crm.http.AuthenticationSuccessResponse;
import com.devote.crm.http.Response;

@Service
public class AuthService {
	
	@Autowired
	private UserDao userDao;

	public Response checklogin(Authentication authentication) {
		if (authentication != null) {
			Response response = new AuthenticationSuccessResponse(true, 200, "Logged In!", userDao.findByEmail(authentication.getName()));
			return response;
		} else {
			return new Response(false);
		}
	}

}
