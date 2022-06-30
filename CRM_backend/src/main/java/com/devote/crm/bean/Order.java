package com.devote.crm.bean;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="SALES_ORDER")
public class Order {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column
	private int customer_id;
	
	@Column
	private int product_id;
	
	@Column
	private int user_id;
	
	@Column
	private Date purchase_date;
	
	@Column
	private String approval_status;
	
	@Column
	private int discount;
	
	@OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL, mappedBy = "order")
	private List<OrderProduct> purchases;


	public Order() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Order(int id, int customer_id, int product_id, int user_id, Date purchase_date, String approval_status,
			int discount, List<OrderProduct> purchases) {
		super();
		this.id = id;
		this.customer_id = customer_id;
		this.product_id = product_id;
		this.user_id = user_id;
		this.purchase_date = purchase_date;
		this.approval_status = approval_status;
		this.discount = discount;
		this.purchases = purchases;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getCustomer_id() {
		return customer_id;
	}

	public void setCustomer_id(int customer_id) {
		this.customer_id = customer_id;
	}

	public int getProduct_id() {
		return product_id;
	}

	public void setProduct_id(int product_id) {
		this.product_id = product_id;
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	public Date getPurchase_date() {
		return purchase_date;
	}

	public void setPurchase_date(Date purchase_date) {
		this.purchase_date = purchase_date;
	}

	public String getApproval_status() {
		return approval_status;
	}

	public void setApproval_status(String approval_status) {
		this.approval_status = approval_status;
	}

	public int getDiscount() {
		return discount;
	}

	public void setDiscount(int discount) {
		this.discount = discount;
	}
	
	public List<OrderProduct> getPurchases() {
		return purchases;
	}

	public void setPurchases(List<OrderProduct> purchases) {
		this.purchases = purchases;
	}
	

}
