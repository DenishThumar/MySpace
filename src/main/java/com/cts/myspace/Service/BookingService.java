package com.cts.myspace.Service;

import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.TimeUnit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.myspace.dao.BookingRepo;
import com.cts.myspace.dao.PropertyRepo;
import com.cts.myspace.model.Booking;
import com.cts.myspace.model.Property;
import com.cts.myspace.model.Users;

@Service
public class BookingService {
	@Autowired
	private BookingRepo br;
	@Autowired
	private PropertyRepo pr;
	
	public Booking addBooking(Booking booking) {
			
			long days = booking.getEndDate().getTime() - booking.getStartDate().getTime();
			long price = TimeUnit.DAYS.convert(days, TimeUnit.MILLISECONDS) * booking.getPrice();
			booking.setPrice(price);
		Property property = pr.findById(booking.getProperty().getId()).orElse(null);
		property.setAvailable(false);
		pr.save(property);
		 
		return br.save(booking);
	}
	
	public List<Booking> myBooking(Users user){
		return br.findByUsers(user);
	}
	
}
