package com.revature.proj2backend.registration;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.proj2backend.model.entities.Users;

public interface UserRepository extends JpaRepository<Users, Long> {

	Optional<Users> findUserByEmail(String email);
	Optional<Users> findUserByUsername(String username);
} 