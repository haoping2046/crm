package com.devote.crm.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devote.crm.bean.OrderProduct;

public interface OrderProductDao extends JpaRepository<OrderProduct, Integer> {

}
