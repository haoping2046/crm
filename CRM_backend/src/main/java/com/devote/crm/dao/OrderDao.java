package com.devote.crm.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devote.crm.bean.Order;

public interface OrderDao extends JpaRepository<Order, Integer> {

}
