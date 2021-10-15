package com.revature.proj2backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.proj2backend.model.entities.Address;
import com.revature.proj2backend.repositories.AddressRepository;

@Service
public class AddressService {
	@Autowired
	private AddressRepository addressRepository;
	
	public int addNewAddress(Address add) {
		add.setId(-1);
		add = addressRepository.save(add);
		return add.getId();
	}
}
