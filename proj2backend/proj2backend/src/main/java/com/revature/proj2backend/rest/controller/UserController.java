package com.revature.proj2backend.rest.controller;

import java.net.URI;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.revature.proj2backend.exceptions.UserAlreadyExistsException;
import com.revature.proj2backend.exceptions.UserNotFoundException;
import com.revature.proj2backend.model.entities.User;
import com.revature.proj2backend.model.entities.UserDao;

@RestController
@RequestMapping("/api/users")
public class UserController {
	
	@Autowired
	private UserDao userDao; //= new UserDao();

	@GetMapping(path = {"", "/"})
	public Iterable<User> getUsers(){
		System.out.println("GETTING ALL USERS.");
		return userDao.findAll();
	}
	
	@GetMapping(path = {"/{id}", "/{id}/"})
	public Optional<User> getUser(
			@PathVariable Integer id ) throws UserNotFoundException {
		System.out.println(String.format("GETTING User %d.", id));
		Optional<User> user = userDao.findById(id);
		if(!user.isPresent()) {
			System.out.println(String.format("User id %d does not exist.", id));
			throw new UserNotFoundException("id-"+id);
		}
		return user;
	}
	
	@PostMapping(path = {"", "/"})
	public ResponseEntity<Object> createUser(
			@RequestBody User user) {
		System.out.println("POST NEW USER.");
		System.out.println("USER:"+user);
		if(user.getId()!=null) {
			Optional<User> checkingUser = userDao.findById( user.getId());
			if(checkingUser.isPresent()) {
				System.out.println("UserID already exists.");
				throw new UserAlreadyExistsException("id-"+user.getId());
			}
		}
		User savedUser = userDao.save(user);
		URI location = ServletUriComponentsBuilder
		.fromCurrentRequest()
		.path("/{id}")
		.buildAndExpand(savedUser.getId()).toUri();
		return ResponseEntity.created(location).build();
	}
	
	@PutMapping(path = {"/{id}", "/{id}/"})
	public User updateUser(
			@PathVariable int id, 
			@RequestBody User user) {
		System.out.println(String.format("PUTTING UserID: %d, User: %s.", id, user.toString()));
		user.setId(id);
		Optional<User> foundUser = userDao.findById(id);
		if(foundUser==null) {
			System.out.println(String.format("User id %d does not exist.", id));
			throw new UserNotFoundException("id-"+id);
		}
		User updatedUser = userDao.save(user);
		return updatedUser;
	}

	@DeleteMapping(path = {"/{id}", "/{id}/"})
	public void deleteUser(
			@PathVariable Integer id) {
		System.out.println(String.format("DELETING UserID: %d", id));
		Optional<User> foundUser = userDao.findById(id);
		if(foundUser==null) {
			System.out.println(String.format("User id %d does not exist.", id));
			throw new UserNotFoundException("id-"+id);
		}
		User use = foundUser.get();
		userDao.delete(use);
	}
}