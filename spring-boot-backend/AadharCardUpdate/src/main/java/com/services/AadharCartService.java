package com.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.dto.Response;
import com.model.AadharCartUpdate;
import com.repository.AadharCartRepository;

@Service
public class AadharCartService {

	@Autowired
	private AadharCartRepository repository;

	// Get All Details from database
	public List<AadharCartUpdate> all() {
		List<AadharCartUpdate> list = repository.findAll();
		ArrayList message = new ArrayList();
		message.add("Empty List");
		if (list.isEmpty()) {
			list.addAll(message);
		}
		return list;
	}

	// Get Details from database based on aadhar number
	public AadharCartUpdate findById(long aadharNumber) {
		AadharCartUpdate update = this.repository.findById(aadharNumber).get();
		return update;
	}

	// Adding aadhar cart details in database
	public ResponseEntity<Response> addDetails(AadharCartUpdate add) {
		List<String> message = new ArrayList<String>();
		Optional<AadharCartUpdate> getInfo = repository.findById(add.getAadharNumber());

		if (getInfo.isPresent()) {
			message.add("Aadhar Number is already Present!");
		} else {
			AadharCartUpdate data = repository.save(add);
			if (data == null) {
				message.add("Please enter the correct details");
			} else {
				message.add("Aadhar Cart details added successfull");
			}
		}
		return ResponseEntity.ok(new Response(message));
	}

	// updating aadhar cart details in database based on aadhar number
	public List<String> updateDetails(AadharCartUpdate update, long aadharNumber) {
		List<String> message = new ArrayList<String>();
		Optional<AadharCartUpdate> getInfo = repository.findById(aadharNumber);

		try {
			if (aadharNumber == 0) {
				throw new IllegalArgumentException("aadhar Number is not present");
			}
			if (getInfo.isEmpty()) {
				throw new Exception("Invalid aadhar number please check aadhar number");
			} else {
				update.setAadharNumber(aadharNumber);
				repository.save(update);
				message.add("aadhar cart details updated successful");
			}
		} catch (IllegalArgumentException e) {
			message.add(e.getMessage());
		} catch (Exception e) {
			message.add(e.getMessage());
		}

		return message;
	}

	// Deleting aadhar cart details from database based on aadhar number
	public List<String> deleteDetails(long aadharNumber) {
		List<String> message = new ArrayList<String>();
		Optional<AadharCartUpdate> getInfo = repository.findById(aadharNumber);
		try {
			if (aadharNumber == 0) {
				throw new IllegalArgumentException("aadhar number is not present");
			}
			if (getInfo.isEmpty()) {
				throw new Exception("addhar cart details is not found");
			} else {
				repository.deleteById(aadharNumber);
				message.add("aadhar cart details deleted successful");
			}
		} catch (Exception e) {
			message.add(e.getMessage());
		}
		return message;
	}
}
