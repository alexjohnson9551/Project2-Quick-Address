package com.revature.proj2backend.rest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.proj2backend.model.entities.Location;
import com.revature.proj2backend.services.AddressService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AddressController {
	
	@Autowired
	public AddressService addressService;

	@GetMapping(path="/address/{id}")
	public ResponseEntity<Location> getAddress(@PathVariable Integer id){
		Location address = addressService.getAddress(id);
		return ResponseEntity.ok(address);
	}
	
	@PostMapping(path = "/addaddress")
	public ResponseEntity<Integer> addaddress(@RequestBody Location add) {
		int a = addressService.addNewAddress(add);
		return ResponseEntity.ok(a);
	}
}
