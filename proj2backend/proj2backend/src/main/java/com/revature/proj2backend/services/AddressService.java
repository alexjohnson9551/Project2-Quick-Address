package com.revature.proj2backend.services;

import java.util.List;
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
	
	public void updateTitle(Location loc) {
		Optional<Location> address = addressRepository.findById(loc.getId());
		if(address.isPresent()) {
			addressRepository.save(loc);
		}
	}

	public void deleteLocation(Integer id ){
		Optional<Location> address = addressRepository.findById(id);
		if(address.isPresent()) {
			addressRepository.deleteById(id);
		}
	}
	public List<Location> getAllAddress() {
		
		return addressRepository.findAll();
	}

}
