package com.cts.myspace.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "Users")
public class Users {
	//@Id
	//	@GeneratedValue(strategy = GenerationType.AUTO)
	//	private Integer Id;
	@Id
	private String email;
	private String name;
	private String password;
	
//	@OneToMany(mappedBy = "users")
//	private List<Property> properties;
//	@OneToMany(mappedBy = "users")
//	private List<Booking> bookings;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
//	public List<Property> getProperties() {
//		return properties;
//	}
//	public void setProperties(Property properties) {
//		this.properties.add(properties);
//	}
//	public List<Booking> getBookings() {
//		return bookings;
//	}
//	public void setBookings(List<Booking> bookings) {
//		this.bookings = bookings;
//	}
	@Override
	public String toString() {
		return "Users [email=" + email + ", name=" + name + ", password=" + password + "]";
	}
	
}
