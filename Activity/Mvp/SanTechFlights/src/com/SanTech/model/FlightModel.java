package com.SanTech.model;

public class FlightModel {
	private String flight_id;
	private String flight_name;
	private String flight_arrival_time;
	private String flight_depature_time;
	private String flight_from;
	private String flight_to;
	private String flight_price;
	private String destination_id;

	public String getFlight_id() {
		return flight_id;
	}

	public void setFlight_id(String flight_id) {
		this.flight_id = flight_id;
	}

	public String getFlight_name() {
		return flight_name;
	}

	public void setFlight_name(String flight_name) {
		this.flight_name = flight_name;
	}

	public String getFlight_arrival_time() {
		return flight_arrival_time;
	}

	public void setFlight_arrival_time(String flight_arrival_time) {
		this.flight_arrival_time = flight_arrival_time;
	}

	public String getFlight_depature_time() {
		return flight_depature_time;
	}

	public void setFlight_depature_time(String flight_depature_time) {
		this.flight_depature_time = flight_depature_time;
	}

	public String getFlight_from() {
		return flight_from;
	}

	public void setFlight_from(String flight_from) {
		this.flight_from = flight_from;
	}

	public String getFlight_to() {
		return flight_to;
	}

	public void setFlight_to(String flight_to) {
		this.flight_to = flight_to;
	}

	public String getFlight_price() {
		return flight_price;
	}

	public void setFlight_price(String flight_price) {
		this.flight_price = flight_price;
	}

	public String getDestination_id() {
		return destination_id;
	}

	public void setDestination_id(String destination_id) {
		this.destination_id = destination_id;
	}

}
