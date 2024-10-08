package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dto.Response;
import com.model.AadharCartUpdate;
import com.services.AadharCartService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/aadhar")
@CrossOrigin("*")
public class AadharCartController {

	@Autowired
	AadharCartService service;

	@GetMapping("/all")
	public List<AadharCartUpdate> getAll() {
		return service.all();
	}

	@GetMapping("/findById/{aadharNumber}")
	public AadharCartUpdate findById(@PathVariable long aadharNumber) {
		return service.findById(aadharNumber);
	}

	@PostMapping("/addDetails")
	public ResponseEntity<Response> addDetails(@Valid @RequestBody AadharCartUpdate add) {
		return service.addDetails(add);
	}

	@PutMapping("/update/{aadharNumber}")
	public List<String> updateDetails(@RequestBody AadharCartUpdate update, @PathVariable long aadharNumber) {
		return service.updateDetails(update, aadharNumber);
	}

	@DeleteMapping("/delete/{aadharNumber}")
	public List<String> deleteDetails(@PathVariable long aadharNumber) {
		return service.deleteDetails(aadharNumber);
	}

}
