package com.revature.proj2backend.rest.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.proj2backend.helpers.SuccFailMessage;
import com.revature.proj2backend.model.entities.Users;
import com.revature.proj2backend.services.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
//@RequestMapping(path = "/test/url/users")
public class RegistrationController {
	
	//private UserRepository userRepository;
	private UserService userService;
	
	@Autowired
	public RegistrationController(UserService userService)  //This Loads on Server boot up
	{
		this.userService = userService;
	}
	
	//we don't need this for registration I think
	@GetMapping(path = "test/url/users")
	public  List<Users> getUsers()  //
	{
		System.out.println("When are you here");
		
		
		return (userService.getUsers());
	}
	
	@PostMapping(path = "/register")
	public ResponseEntity<SuccFailMessage> registerNewUser(@RequestBody Users user)  //Axios POST comes here
	{
		return ResponseEntity.ok(userService.addNewUser(user));
	}
	
	
}
