package com.revature.proj2backend.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.proj2backend.model.entities.Location;
import com.revature.proj2backend.repositories.AddressRepository;

@Service
public class AddressService {
	@Autowired
	private AddressRepository addressRepository;
	
	public Location addNewAddress(Location add) {
		return addressRepository.save(add);
	}

	public Location getAddress(Integer id) {
		Optional<Location> address = addressRepository.findById(id);
		if(address.isPresent()) {
			return address.get();
		}
		return null;
	}
}
