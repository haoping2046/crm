package com.devote.crm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devote.crm.bean.Order;
import com.devote.crm.http.Response;
import com.devote.crm.service.OrderService;

//@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/orders")
public class OrderController {
	
	@Autowired
	private OrderService orderService;
	
//	@PreAuthorize("hasAuthority('admin')")
	@GetMapping
	public List<Order> getAll() {
		List<Order> res = orderService.getAll();
		return res;
	}
	
	@GetMapping("/{id}")
	public Order getById(@PathVariable int id) {
		return orderService.getOrderById(id);
	}
	
	@GetMapping("/userId={userId}")
	public List<Order> getByUserId(@PathVariable int userId) {
		return userId == 0 ? orderService.getAll() : orderService.getOrderByUserId(userId);
	}
	
	@PostMapping
	public Response save(@RequestBody Order order) {
		return orderService.save(order);
	}
	
	@DeleteMapping("/{id}")
	public Response delete(@PathVariable int id) {
		return orderService.deleteOrder(id);
	}
}
