package com.devote.crm.bean;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import org.springframework.security.core.GrantedAuthority;

@Entity
@Table
public class Profile implements GrantedAuthority {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	@Column
	private String type;
	
	public Profile() {
		super();
	}
	
	public Profile(int id) {
		super();
		this.id = id;
	}
	
	public Profile(int id, String type) {
		super();
		this.id = id;
		this.type = type;
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	
//	public List<User> getUsers() {
//		return users;
//	}
//
//	public void setUsers(List<User> users) {
//		this.users = users;
//	}

	@Override
	public String toString() {
		return "Profile [id=" + id + ", type=" + type + "]";
	}
	
	@Override
	public String getAuthority() {
		return type;
	}
}
