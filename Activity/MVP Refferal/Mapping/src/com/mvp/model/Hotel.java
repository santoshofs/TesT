package com.mvp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="hotel")
public class Hotel {
	
	@Id
	@GeneratedValue
	@Column(name="hotel_id")
	private int id;
	
	@Column(name="hotel_name")
	private String name;
	
	@Column(name="hotel_address")
	private String address;
	
	@Column(name="hotel_contactno")
	private String contactno;
	
	@ManyToOne
	@JoinColumn(name="city_id")
	private City city;

	public int getId() {
		return id;
	}

	public String getName() {
		return name;
	}
	
	public void setId(int id) {
		this.id = id;
	}


	public void setHotel_name(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setHotel_address(String address) {
		this.address = address;
	}

	public String getContactno() {
		return contactno;
	}

	public void setHotel_contactno(String contactno) {
		this.contactno = contactno;
	}

	 public City getCity() { 
	    return city;
	 }
	 
	 public void setCity(City city) {
	    this.city = city;
	 }
	 
}
	

