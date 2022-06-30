package com.devote.crm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devote.crm.bean.Product;
import com.devote.crm.service.ProductService;

@RestController
@RequestMapping("/products")
public class ProductController {
	@Autowired
	private ProductService productService;
	
//	@PreAuthorize("permitAll()")
	@GetMapping
	public List<Product> getAll() {
		return productService.getAll();
	}
	
//	@PreAuthorize("hasAuthority('ROLE_ADMIN')")
	@GetMapping("/{id}")
	public Product getProductById(@PathVariable int id) {
		return productService.getProductById(id);
	}
	
	@GetMapping("/name/{name}")
	public Product getProductByName(@PathVariable String name) {
		return productService.getProductByName(name);
	}
	
	@PostMapping
	public void save(@RequestBody Product product) {
		System.out.println("Saving: " + product);
		productService.save(product);
	}
}
