package com.revature.proj2backend.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.proj2backend.model.entities.Location;
import com.revature.proj2backend.repositories.AddressRepository;
import com.revature.proj2backend.repositories.PrelocationRepository;

@Service
public class AddressService {
	@Autowired
	private AddressRepository addressRepository;
	
	@Autowired
	private PrelocationRepository preRepository;
	
	public int addNewAddress(Location add) {
		add.setId(-1);
		preRepository.save(add.getPrelocation());
		add = addressRepository.save(add);
		return add.getId();
	}

	public Location getAddress(Integer id) {
		Optional<Location> address = addressRepository.findById(id);
		if(address.isPresent()) {
			return address.get();
		}
		return null;
	}
}
