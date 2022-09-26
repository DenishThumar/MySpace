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

import com.cts.myspace.Service.BookingService;
import com.cts.myspace.Service.UserService;
import com.cts.myspace.model.Booking;

@RestController
@RequestMapping("/booking")
@CrossOrigin
public class BookingController {
	@Autowired
	private BookingService bs;
	@Autowired
	private UserService us;
	
	
	@PostMapping
	public Booking doBooking(@RequestBody Booking booking, HttpServletRequest req) {
		booking.setUsers(us.getUsers(req.getRemoteUser()));
		return bs.addBooking(booking);
	}
	
	@GetMapping("/myBookings")
	public List<Booking> myBookings(HttpServletRequest req){
		
		return bs.myBooking(us.getUsers(req.getRemoteUser()));
	}
}
