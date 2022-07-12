package com.devote.crm.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devote.crm.bean.Customer;
import com.devote.crm.dao.CustomerDao;

@Service
public class CustomerService {
	
	@Autowired	
	private CustomerDao customerDao;
	
	public List<Customer> getAll() {
		return customerDao.findAll();
	}
}
