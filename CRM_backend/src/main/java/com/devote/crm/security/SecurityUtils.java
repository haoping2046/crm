package com.devote.crm.security;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import com.devote.crm.bean.User;
import com.devote.crm.bean.Profile;
import com.devote.crm.http.Response;
import com.fasterxml.jackson.databind.ObjectMapper;

public class SecurityUtils {
	
	private static final ObjectMapper mapper = new ObjectMapper();

    public static void sendResponse(HttpServletResponse response, int status, String message, Exception exception, User user) throws IOException {
    	response.setContentType("application/json;charset=UTF-8");
        PrintWriter writer = response.getWriter();
        writer.write(mapper.writeValueAsString(new Response(exception == null ? true : false, status, message, user)));
        response.setStatus(status);
        writer.flush();
        writer.close();
    }
	
}
