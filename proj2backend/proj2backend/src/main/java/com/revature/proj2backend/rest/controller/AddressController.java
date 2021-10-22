package com.revature.proj2backend.rest.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.proj2backend.model.entities.Location;
import com.revature.proj2backend.services.AddressService;

@RestController("/address")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials="true")
public class AddressController {

	public AddressService addressService;

	@Autowired
	public AddressController(AddressService addressService) {
		this.addressService = addressService;
	}

	@GetMapping(path="/address/{id}")
	public ResponseEntity<Location> getAddress(@PathVariable Integer id){
		System.out.println("I am called.");
		Location address = addressService.getAddress(id);
		if(address == null)
			return ResponseEntity.status(404).build();
		System.out.println("Returning: " + address.toString());
		return ResponseEntity.ok(address);
	}
	
	@GetMapping(path="/address/")
	public ResponseEntity<List<Location>> getAllAddress(HttpServletRequest request){
		HttpSession session = request.getSession();
		List<Location> address = addressService.findById((Integer) session.getAttribute("userID"));
		System.out.println("Returning: " + (Integer) session.getAttribute("userID"));
		return ResponseEntity.ok(address);
	}
	
	@PostMapping(path = "/address/")
	public ResponseEntity<Location> addaddress(@RequestBody Location add) {
		return ResponseEntity.ok(addressService.addNewAddress(add));
	}
	
	@PutMapping(path = "/address/{id}")
	public ResponseEntity<String> updatetitle(@PathVariable Integer id, @RequestBody Location loc) {
		loc.setId(id);
		addressService.updateTitle(loc);
		return ResponseEntity.ok().build();
	}
	
	@DeleteMapping(path="/address/{id}")
	public ResponseEntity<String> deleteadd(@PathVariable Integer id) {
		addressService.deleteLocation(id);
		return ResponseEntity.ok("1");
	}
}
