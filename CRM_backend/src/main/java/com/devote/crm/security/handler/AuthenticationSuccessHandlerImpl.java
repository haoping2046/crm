package com.devote.crm.security.handler;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import com.devote.crm.bean.Profile;
import com.devote.crm.bean.User;
import com.devote.crm.security.SecurityUtils;


@Component
public class AuthenticationSuccessHandlerImpl extends SimpleUrlAuthenticationSuccessHandler {

	@Override
	public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
			Authentication authentication) throws IOException, ServletException {
		// get user 
    	Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    	User user = new User();
    	if (principal instanceof User) {
    		user = ((User)principal);
    	}
    	
		SecurityUtils.sendResponse(response, HttpServletResponse.SC_OK, "Login successfully.", null, user);
	}
	
}
