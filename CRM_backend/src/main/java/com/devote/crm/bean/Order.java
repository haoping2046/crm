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
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="SALES_ORDER")
public class Order {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinColumn(name = "id", referencedColumnName = "order_id")
	private OrderCustomer orderCustomer;
	
	@OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinColumn(name = "id", referencedColumnName = "order_id")
	private OrderUser orderUser;

	@Column
	private Date purchase_date;
	
	@Column
	private String approval_status;
	
	@Column
	private float discount;
	
	@Column
	private String title;
	
	@OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "order")
	private List<OrderProduct> purchases;


	public Order() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Order(int id, Date purchase_date, String approval_status,
			float discount, List<OrderProduct> purchases, String title, OrderCustomer orderCustomer, OrderUser orderUser) {
		super();
		this.id = id;
		this.purchase_date = purchase_date;
		this.approval_status = approval_status;
		this.discount = discount;
		this.purchases = purchases;
		this.title = title;
		this.orderCustomer = orderCustomer;
		this.orderUser = orderUser;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public OrderUser getOrderUser() {
		return orderUser;
	}

	public void setOrderUser(OrderUser orderUser) {
		this.orderUser = orderUser;
	}
	
	public OrderCustomer getOrderCustomer() {
		return orderCustomer;
	}

	public void setOrderCustomer(OrderCustomer orderCustomer) {
		this.orderCustomer = orderCustomer;
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

	public float getDiscount() {
		return discount;
	}

	public void setDiscount(float discount) {
		this.discount = discount;
	}
	
	public List<OrderProduct> getPurchases() {
		return purchases;
	}

	public void setPurchases(List<OrderProduct> purchases) {
		this.purchases = purchases;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}
	
	

}
