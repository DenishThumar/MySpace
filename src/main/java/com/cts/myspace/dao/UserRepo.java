package com.cts.myspace.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cts.myspace.model.Users;

@Repository
public interface UserRepo extends JpaRepository<Users, String>{
	//public Users findByEmail(String email);
	public Users findByEmail(String email);
}
