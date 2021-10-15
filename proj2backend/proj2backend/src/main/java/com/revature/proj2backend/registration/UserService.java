package com.revature.proj2backend.registration;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.proj2backend.model.entities.Users;

@Service //same as component
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
	
	 public String addNewUser(Users user) {
	   Optional<Users> userByUsername = userRepository.findUserByUsername(user.getUsername());
	   Optional<Users> userByEmail = userRepository.findUserByEmail(user.getEmail());
	   
	   if(userByUsername.isPresent()) {
	     return "Username is Already Registered";
	   }else if(userByEmail.isPresent()) {
	     return "Email is Already Registered";
	   }
	   
	   userRepository.save(user);
	   return "User Added";
	 }
	
	 public void deleteUser(Long userId) {
	   boolean exists = userRepository.existsById(userId);
	   if (!exists)
	   {
	     throw new IllegalStateException("user ID: " + userId + " does not exist");
	   }
	   userRepository.deleteById(userId);
	 }
}