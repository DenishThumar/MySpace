package com.cts.myspace.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cts.myspace.model.Property;
import com.cts.myspace.model.Users;

@Repository
public interface PropertyRepo extends JpaRepository<Property, Integer> {

//	public List<Property> findByCityAndAvailableAndPriceLessThan(String city, double price, boolean available);
//	public List<Property> findByCityAndAvailable(String city, boolean available);
	
//	@Modifying
//	@Query("update property p set p.available=false where p.id= ?1")
//	void updateProperty(Integer id);
	
	public List<Property> findByUsers(Users user);


}
