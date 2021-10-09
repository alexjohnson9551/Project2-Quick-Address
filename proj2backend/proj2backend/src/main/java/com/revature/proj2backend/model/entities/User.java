package com.revature.proj2backend.model.entities;

import java.io.Serializable;

import javax.persistence.Cacheable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;

import org.hibernate.annotations.*;

import com.revature.proj2backend.entities.enums.eRole;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Cacheable
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
@Entity
@Data
@NoArgsConstructor
@RequiredArgsConstructor
public class User implements Serializable{

	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;


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

	@Enumerated(value = EnumType.STRING)
	@Column(name="Role", unique = false, nullable = false, columnDefinition = "varchar(25) default 'USER'")
	private eRole role;

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@PrePersist
	public void prePersist() {
	    if(role == null) //We set default value in case if the value is not set yet.
	    	role = eRole.USER;
	}
	
	public eRole getRole() {
		return role;
	}

	public void setRole(eRole role) {
		this.role = role;
	}
	
	@Override
	public String toString() {
		return "User [id=" + id + ", username=" + username + ", password=" + password + ", firstName=" + firstName
				+ ", lastName=" + lastName + ", email=" + email + ", role=" + role + "]";
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}
	
	
}