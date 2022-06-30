package com.devote.crm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devote.crm.bean.User;
import com.devote.crm.http.Response;
import com.devote.crm.service.UserService;

@RestController
@RequestMapping("/users")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@GetMapping
	public List<User> getAll() {
		return userService.getAll();
	}
	
	@PostMapping
	public Response addUser(@RequestBody User user) {
		System.out.println(user);
		return userService.addUser(user);
	}
}

