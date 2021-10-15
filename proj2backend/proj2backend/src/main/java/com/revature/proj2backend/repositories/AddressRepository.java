package com.revature.proj2backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.proj2backend.model.entities.Address;

public interface AddressRepository extends JpaRepository<Address, Long> {

}
