package com.devote.crm.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.devote.crm.bean.Product;

public interface ProductDao extends JpaRepository<Product, Integer> {
    public Product findByName(String name);
    
    @Query("select p from Product p where p.price = :price")
    public Product getByPrice(@Param("price") int price);

}
