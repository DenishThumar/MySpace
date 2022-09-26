package com.cts.myspace.jwt;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.cts.myspace.Security.CustomUserDetailsService;

@RestController
public class JwtController {
	@Autowired
	private JwtUtil jwtUtil;
	
	@Autowired
	private CustomUserDetailsService customUserDetailsService;
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@PostMapping("/signin")
	@CrossOrigin(origins = "http://localhost:3000")
	public JwtResponse generateToken(@RequestBody JwtRequest jwtRequest) throws Exception{
		try {
			this.authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(jwtRequest.getEmail(),jwtRequest.getPassword()));
		}	
		catch (Exception e) {
		    
			return new JwtResponse();
		}
		
		
		UserDetails userDetails = this.customUserDetailsService.loadUserByUsername(jwtRequest.getEmail());
		String token = this.jwtUtil.generateToken(userDetails);
		
		return new JwtResponse(token);
		
		//return ResponseEntity.ok(new JwtResponse(token));
	}
}
