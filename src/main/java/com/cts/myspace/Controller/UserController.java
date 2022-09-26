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

import com.cts.myspace.Service.UserService;
import com.cts.myspace.model.Users;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
	@Autowired
	private UserService us;
	
	@GetMapping
	public String getUsers(HttpServletRequest req){
		return (String) req.getAttribute("email");
	}
	
	@PostMapping
	public Users addUser(@RequestBody Users user) {
		System.out.println("Request come");
		return us.addUser(user);
	}
}
