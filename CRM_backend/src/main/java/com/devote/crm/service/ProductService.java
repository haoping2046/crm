package com.devote.crm.service;

import java.io.ByteArrayInputStream;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devote.crm.bean.Product;
import com.devote.crm.dao.ProductDao;

@Service
public class ProductService {
    @Autowired
    private ProductDao productDao;

    public void save(Product product) {
        productDao.save(product);
    }

    public Product getProductById(Integer id) {
        return productDao.findById(id).get();
//		Optional<Product> p = getProduct(id);
//		if(p.isPresent()) {
//			return p.get();
//		} else {
//			throw new NullPointerException();
//		}
    }


    public Product getProductByName(String name) {
        return productDao.findByName(name);
    }

    public List<Product> getAll() {
        return productDao.findAll();
    }

    
}
