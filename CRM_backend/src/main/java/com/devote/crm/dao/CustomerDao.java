package com.devote.crm.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devote.crm.bean.Customer;

public interface CustomerDao extends JpaRepository<Customer, Integer>{

}
