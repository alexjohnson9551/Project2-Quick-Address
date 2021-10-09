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
	
}