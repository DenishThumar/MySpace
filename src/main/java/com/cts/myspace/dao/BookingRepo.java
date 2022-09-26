package com.cts.myspace.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cts.myspace.model.Booking;
import com.cts.myspace.model.Users;

@Repository
public interface BookingRepo extends JpaRepository<Booking, Integer> {
	List<Booking> findByUsers(Users users);
}
