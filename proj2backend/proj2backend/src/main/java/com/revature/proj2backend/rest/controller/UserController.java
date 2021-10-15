package com.revature.proj2backend.rest.controller;

import java.util.Optional;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
//import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.proj2backend.helpers.SuccFailMessage;
import com.revature.proj2backend.helpers.SuccFailMessage.SuccFailMessageBuilder;
import com.revature.proj2backend.model.entities.UnPw;
import com.revature.proj2backend.model.entities.Users;
import com.revature.proj2backend.registration.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private HttpServletRequest request;

	@PostMapping(path = "/login")
	@ResponseBody
	public SuccFailMessage doLogin(@RequestBody UnPw up) {
		Optional<Users> u0 = userService.findUserByUsername(up.getUsername());
		SuccFailMessageBuilder sfmb = SuccFailMessage.builder();
		if (u0.isEmpty()) {
			sfmb.successful(false);
			sfmb.message("Username not found!");
		} else {
			Users u = u0.get();
			if(!u.getPassword().equals(up.getPassword())) {
				sfmb.successful(false);
				sfmb.message("Incorrect password!");
			} else {
				HttpSession session = request.getSession(true);
				session.setAttribute("loggedInUser", u);
				sfmb.successful(true);
				sfmb.message("Login successful.");
			}
		}
		return sfmb.build();
	}
	
	@PostMapping(path = "/logout")
	public ResponseEntity<String> doLogout() {
		request.getSession().invalidate();
		return ResponseEntity.ok("Logged out.");
	}
	
	
}