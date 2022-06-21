package com.devote.crm.dao;

import com.devote.crm.bean.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDao extends JpaRepository<User, Integer> {
	User findByEmail(String username);
}
