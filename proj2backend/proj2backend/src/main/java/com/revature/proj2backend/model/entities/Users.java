package com.revature.proj2backend.model.entities;


import javax.persistence.Cacheable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

//import project2.enums.USER_ROLES;

@Cacheable
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
@Entity
@Table(name="Users")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Users{


	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="UserID")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer UserID;
	
	@Column(name="Username", unique=true, nullable=false, length = 50)
	private String username;
	
	@Column(name="Password", unique = false, nullable = false, length = 50)
	private String password;
	
	@Column(name="FirstName", unique = false, nullable = false, length = 100)
	private String firstName;
	
	@Column(name="LastName", unique = false, nullable = false, length = 100)
	private String lastName;
	
	@Column(name="Email", unique = true, nullable = false, length = 150)
	private String email;

	//@Enumerated(EnumType.STRING)
//	@Enumerated(value = EnumType.STRING)
//	@Column(name="UserRole", unique = false, nullable = false, columnDefinition = "varchar(25) default 'OTHER'")
//	private USER_ROLES UserRole;
	
	
//	public Users() {
//	}
//	
//	public Users(Integer UserID, String Username, String Password, String FirstName, String LastName, String Email) {  //removed USER_ROLES UserRole
//		super();
//		this.UserID = UserID;
//		this.username = Username;
//		this.Password = Password;
//		this.FirstName = FirstName;
//		this.LastName = LastName;
//		this.email = Email;
//		this.UserRole = UserRole;
//	}

//	public Integer getUserID() {
//		return UserID;
//	}
//
//	public void setUserID(Integer UserID) {
//		this.UserID = UserID;
//	}
//
//	public String getUsername() {
//		return username;
//	}
//
//	public void setUsername(String Username) {
//		this.username = Username;
//	}
//
//	public String getPassword() {
//		return Password;
//	}
//
//	public void setPassword(String Password) {
//		this.Password = Password;
//	}
//	public String getFirstName() {
//		return FirstName;
//	}
//
//	public void setFirstName(String FirstName) {
//		this.FirstName = FirstName;
//	}
//
//	public String getLastName() {
//		return LastName;
//	}
//
//	public void setLastName(String LastName) {
//		this.LastName = LastName;
//	}
//	
//	public String getEmail() {
//		return email;
//	}
//
//	public void setEmail(String Email) {
//		this.email = Email;
//	}

//	public USER_ROLES getUSER_ROLE() {
//		return UserRole;
//	}
//
//	public void setUSER_ROLE(USER_ROLES UserRole) {
//		this.UserRole = UserRole;
//	}

//	@Override
//	public String toString() {
//		return "User [id=" + UserID + ", uname=" + username + ", pass=" + Password + ", fname="
//				+ FirstName + ", lname=" + LastName + ", email=" + email + "]";
//	}
	
}