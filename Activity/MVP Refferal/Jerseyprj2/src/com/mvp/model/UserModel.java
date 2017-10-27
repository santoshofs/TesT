
	package com.mvp.model;

	import javax.persistence.Column;
	import javax.persistence.Entity;
	import javax.persistence.GeneratedValue;
	import javax.persistence.Id;
	import javax.persistence.Table;

	@Entity
	@Table(name="policy_type")
	public class UserModel {
		
		@Id
		@GeneratedValue
		@Column(name="policy_id")
		private int id;
		
		@Column(name="policy_type")
		private String name;
		
		@Column(name="policy_description")
		private String content;
		
		@Column(name="policy_amount")
		private String amount;
		
		@Column(name="policy_interest")
		private String interest;
		
		@Column(name="policy_period")
		private String period;

		public int getId() {
			return id;
		}

		public void setId(int id) {
			this.id = id;
		}

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public String getContent() {
			return content;
		}

		public void setContent(String content) {
			this.content = content;
		}

		public String getAmount() {
			return amount;
		}

		public void setAmount(String amount) {
			this.amount = amount;
		}

		public String getInterest() {
			return interest;
		}

		public void setInterest(String interest) {
			this.interest = interest;
		}

		public String getPeriod() {
			return period;
		}

		public void setPeriod(String period) {
			this.period = period;
		}
		
	}
		
		


