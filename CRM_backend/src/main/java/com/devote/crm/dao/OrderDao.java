package com.devote.crm.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.devote.crm.bean.Order;

public interface OrderDao extends JpaRepository<Order, Integer> {

	@Query(value = "SELECT o.id, o.purchase_date, o.approval_status, o.discount, o.title, c.name, c.phone, c.company, u.name "
			+ "FROM sales_order as o, order_customer as oc, customer as c, order_user as ou, user as u "
			+ "WHERE o.id = oc.order_id and oc.customer_id = c.id "
			+ "and o.id = ou.order_id and ou.user_id = u.id "
			+ "and u.id = :userId", nativeQuery = true)
	public List<Order> findPersonalOrderByUserId(@Param("userId") int userId);
}
