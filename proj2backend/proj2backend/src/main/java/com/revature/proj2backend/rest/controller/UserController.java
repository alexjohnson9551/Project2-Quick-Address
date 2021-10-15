package com.revature.proj2backend.rest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.proj2backend.model.entities.Users;
import com.revature.proj2backend.registration.UserService;

@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	private UserService userService;

	@PostMapping
	public ResponseEntity<String> create(@RequestBody Users user) {
		if(user.getUserID() != 0) {
			return ResponseEntity.badRequest().build();
		}
		return ResponseEntity.ok(userService.addNewUser(user));
	}
	
}