package com.cts.myspace.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.myspace.dao.PropertyRepo;
import com.cts.myspace.model.Property;
import com.cts.myspace.model.Users;

@Service
public class PropertyService {
	@Autowired
	private PropertyRepo pr;
	
	public Property addProperty(Property property) {
		return pr.save(property);
	}
	
	public List<Property> getProperty() {
		return pr.findAll();
	}
	
	public List<Property> getMyProperty(Users user){
		return pr.findByUsers(user);
	}
	
//	public List<Property> getProperty(String city){
//		return pr.findByCityAndAvailable(city, true);
//	}
//	public List<Property> getProperty(String city, double price){
//		return pr.findByCityAndAvailableAndPriceLessThan(city, price, true);
//	}
}
