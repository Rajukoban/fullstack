package com.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Entity
@Table(name = "aadharUpdate")
@Data
public class AadharCartUpdate {

	@Id
	@Column(name = "aadharNumber")
	private long aadharNumber;

	@Column(name = "name")
	@NotBlank(message = "Name is mandatory")
	private String name;

	@Column(name = "address")
	private String address;

	@Column(name = "contact")
	private long contact;

	@Column(name = "email")
	private String email;

}
