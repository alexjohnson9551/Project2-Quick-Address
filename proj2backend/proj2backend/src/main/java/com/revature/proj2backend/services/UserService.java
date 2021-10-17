package com.revature.proj2backend.services;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.proj2backend.helpers.SuccFailMessage;
import com.revature.proj2backend.helpers.SuccFailMessage.SuccFailMessageBuilder;
import com.revature.proj2backend.model.entities.Users;
import com.revature.proj2backend.repositories.UserRepository;

@Service // same as component
public class UserService {

	@Autowired
	private UserRepository userRepository;

	public UserService(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	public Optional<Users> findUserByUsername(String username) {
		return userRepository.findUserByUsername(username);
	}

	public List<Users> getUsers() {
		return userRepository.findAll();
	}

	public SuccFailMessage addNewUser(Users user) {
		Optional<Users> userByUsername = userRepository.findUserByUsername(user.getUsername());
		Optional<Users> userByEmail = userRepository.findUserByEmail(user.getEmail());
		SuccFailMessageBuilder sfmb = SuccFailMessage.builder();
		if (userByUsername.isPresent()) {
			sfmb.message("Username is already registered.");
			sfmb.successful(false);
		} else if (userByEmail.isPresent()) {
			sfmb.message("Email is already registered.");
			sfmb.successful(false);
		} else {
			sfmb.message("User registered successfully!");
			sfmb.successful(true);
			userRepository.save(user);
		}
		return sfmb.build();
	}

	public void deleteUser(Long userId) {
		boolean exists = userRepository.existsById(userId);
		if (!exists) {
			throw new IllegalStateException("user ID: " + userId + " does not exist");
		}
		userRepository.deleteById(userId);
	}
}