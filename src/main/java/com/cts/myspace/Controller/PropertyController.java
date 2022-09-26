package com.cts.myspace.Controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.myspace.Service.PropertyService;
import com.cts.myspace.Service.UserService;

import com.cts.myspace.model.Property;
import com.cts.myspace.model.Users;

@RestController
@RequestMapping("/property")
@CrossOrigin
public class PropertyController {
	@Autowired
	private PropertyService ps;
	@Autowired
	private UserService us;
	
	@PostMapping
	public Property addProperty(@RequestBody Property property, HttpServletRequest req) {
		
		Users user =us.getUsers(req.getRemoteUser());
		property.setUsers(user);
		ps.addProperty(property);
		
		return property;
	}
	
	@GetMapping
	public List<Property> getProperty() {
		return ps.getProperty();
	}
	
	@GetMapping("/myusers")
	public List<Property> getmyprop(HttpServletRequest req){
		Users user = us.getUsers(req.getRemoteUser());
		return ps.getMyProperty(user);
	}
	
	
}
