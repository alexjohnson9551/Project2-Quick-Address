package com.revature.proj2backend.exceptions;


public class IncorrectLoginException extends Exception {

	private static final long serialVersionUID = 1L;

	private final String userName;

	private final String password;
	
	
	public IncorrectLoginException(String userName, String password) {

		this.userName = userName;
		this.password = password;
	}
	
	public String getUserName() {
		return userName;
	}
	
	public String getPassword() {
		return password;
	}
	
}