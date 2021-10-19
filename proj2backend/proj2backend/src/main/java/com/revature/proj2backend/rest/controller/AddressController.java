package com.revature.proj2backend.rest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.proj2backend.model.entities.Location;
import com.revature.proj2backend.services.AddressService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AddressController {
	
	@Autowired
	public AddressService addressService;

	@GetMapping(path="/address/{id}")
	@ResponseBody
	public ResponseEntity<Location> getAddress(@PathVariable Integer id){
		System.out.println("I am called.");
		Location address = addressService.getAddress(id);
		System.out.println("Returning: " + address.toString());
		return ResponseEntity.ok(address);
	}
	
	@PostMapping(path = "/addaddress")
	public ResponseEntity<Location> addaddress(@RequestBody Location add) {
		return ResponseEntity.ok(addressService.addNewAddress(add));
	}
	
	@PostMapping(path = "/updatetitle")
	public ResponseEntity<String> updatetitle(@RequestBody Location loc) {
		addressService.updateTitle(loc);
		return ResponseEntity.ok().build();
	}
	
	
	@DeleteMapping(path="/address/{id}")
	public ResponseEntity<String> deleteadd(@PathVariable Integer id) {
		addressService.deleteLocation(id);
		return ResponseEntity.ok("1");
	}
}
