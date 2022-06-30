package com.devote.crm.bean;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="ORDER_PRODUCT")
public class OrderProduct {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.DETACH)
	private Order order;
	
	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.DETACH)
	private Product product;
	
	@Column
	private int qty;

	public OrderProduct() {
		super();
		// TODO Auto-generated constructor stub
	}

	public OrderProduct(int id, Order order, Product product, int qty) {
		super();
		this.id = id;
		this.order = order;
		this.product = product;
		this.qty = qty;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Order getOrder() {
		return order;
	}

	public void setOrder(Order order) {
		this.order = order;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public int getQty() {
		return qty;
	}

	public void setQty(int qty) {
		this.qty = qty;
	}
	
	
}
