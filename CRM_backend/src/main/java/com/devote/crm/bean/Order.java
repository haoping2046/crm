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
	
	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.DETACH)
	@JoinTable(
			name = "order_customer",
			joinColumns = {
				@JoinColumn(name = "order_id", referencedColumnName = "id")
			}, 
			inverseJoinColumns = {
				@JoinColumn(name = "customer_id", referencedColumnName = "id")
			}
		)
	private Customer customer;
	
	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.DETACH)
	@JoinTable(
			name = "order_user",
			joinColumns = {
				@JoinColumn(name = "order_id", referencedColumnName = "id")
			}, 
			inverseJoinColumns = {
				@JoinColumn(name = "user_id", referencedColumnName = "id")
			}
		)
	private User user;
	
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
			float discount, List<OrderProduct> purchases, String title, Customer customer, User user) {
		super();
		this.id = id;
		this.purchase_date = purchase_date;
		this.approval_status = approval_status;
		this.discount = discount;
		this.purchases = purchases;
		this.title = title;
		this.customer = customer;
		this.user = user;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
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
