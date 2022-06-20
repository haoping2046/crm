package com.devote.crm.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devote.crm.bean.Order;
import com.devote.crm.dao.OrderDao;

@Service
public class OrderService {
	
	@Autowired
	private OrderDao orderDao;
	
	public List<Order> getAll() {
		return orderDao.findAll();
	}
}
