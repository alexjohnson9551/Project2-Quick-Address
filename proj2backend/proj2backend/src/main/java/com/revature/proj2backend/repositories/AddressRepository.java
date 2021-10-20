package com.revature.proj2backend.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.proj2backend.model.entities.Location;

public interface AddressRepository extends JpaRepository<Location, Integer> {
	
	Optional<List<Location>> findByUserID(Integer id);

}
