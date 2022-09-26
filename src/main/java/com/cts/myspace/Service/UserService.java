package com.cts.myspace.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.cts.myspace.dao.UserRepo;
import com.cts.myspace.model.Users;

@Service
public class UserService {
	@Autowired
	private UserRepo ur;
	
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	public Users getUsers(String email) {
		System.out.println("hiii");
		System.out.println(ur.findByEmail(email));
		
		return ur.findByEmail(email);
	}
	
	public Users addUser(Users user) {
		String pass = user.getPassword();
		user.setPassword(bCryptPasswordEncoder.encode(pass));
		return ur.save(user);
	}
}
