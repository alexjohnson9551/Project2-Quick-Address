package com.revature.proj2backend.controller;

import java.util.Optional;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
//import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.proj2backend.helpers.SuccFailMessage;
import com.revature.proj2backend.helpers.SuccFailMessage.SuccFailMessageBuilder;
import com.revature.proj2backend.model.entities.UnPw;
import com.revature.proj2backend.model.entities.Users;
import com.revature.proj2backend.services.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowCredentials="true")

public class UserController {
	
	@Autowired
	private UserService userService;
	
//	@Autowired
//	private HttpServletRequest request;
	
//	@Autowired
//	private HttpSession session;

	@PostMapping(path = "/login")
	public SuccFailMessage doLogin(@RequestBody UnPw up, HttpServletRequest request) {
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
				HttpSession session = request.getSession();
				session.setAttribute("userID", u.getUserID());
				session.setAttribute("loggedInUser", u);
				session.setAttribute("loggedIn", true);
				sfmb.successful(true);
				sfmb.message("Login successful.");
			}
		}
		System.out.println("Did login.");
		return sfmb.build();
	}
	
	@PostMapping(path = "/logout")
	public ResponseEntity<String> doLogout(HttpServletRequest request) {
		request.getSession().invalidate();
		System.out.println("Did logout.");
		return ResponseEntity.ok("Logged out.");
	}
	
//	@PostMapping(path = "/checksession")
//	public ResponseEntity<Boolean> checksession(HttpServletRequest request) {
//		Users u = (Users) request.getSession().getAttribute("loggedInUser");
//		if(u == null) {
//			return ResponseEntity.status(401).build();
//		} else {
//			return ResponseEntity.ok(true);
//		}
//	}
	
	@PostMapping(path = "/getloggedinuser")
	public ResponseEntity<Users> getLoggedInUser(HttpServletRequest request) {
		System.out.println("Checking for logged in user.");
		if(request.getSession(false) == null) {
			return ResponseEntity.status(401).build();
		}
		Users u = (Users) request.getSession(false).getAttribute("loggedInUser");
		if(u == null) {
			return ResponseEntity.status(401).build();
		} else {
			return ResponseEntity.ok(u);
		}
	}
	
}