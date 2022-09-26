package com.cts.myspace.Security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.cts.myspace.dao.UserRepo;
import com.cts.myspace.model.Users;

@Service
public class CustomUserDetailsService implements UserDetailsService {
	@Autowired
	private UserRepo ur;
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		Users user = this.ur.findByEmail(username);
		if(user == null) {
			throw new UsernameNotFoundException("User Not Found");
		}
		return new CustomUserDetails(user);
	}

}
