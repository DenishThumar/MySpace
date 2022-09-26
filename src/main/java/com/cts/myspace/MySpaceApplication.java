package com.cts.myspace;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.cts.myspace.dao.UserRepo;
import com.cts.myspace.model.Users;

@SpringBootApplication
public class MySpaceApplication implements CommandLineRunner{
	@Autowired
	private UserRepo ur;
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	public static void main(String[] args) {
		SpringApplication.run(MySpaceApplication.class, args);
	}
	
	
	public void run (String... args) throws Exception {
		Users user = new Users();
		user.setEmail("denishthumar@gmail.com");
		user.setName("Denish");
		user.setPassword(this.bCryptPasswordEncoder.encode("12345678"));
		
		this.ur.save(user);
		
		System.out.println(ur.findByEmail("denishthumar@gmail.com"));
	}

}
