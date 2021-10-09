package models;


import java.io.Serializable;


import javax.persistence.Cacheable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.*;

//import project2.enums.USER_ROLES;

@Cacheable
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
@Entity
@Table(name="Users")
@NamedQueries(
	    {
	        @NamedQuery(
	        name = "viewAllUsers", 
	        query = "FROM Users s"),
	        @NamedQuery(
	        name = "findUserByID",
	        query = "FROM Users s WHERE s.id = :id"),
	        @NamedQuery(
	        name = "findUsersByRole", 
	        query = "FROM Users s WHERE s.UserRole = :UserRole"),
	        @NamedQuery(
	        name = "findUserByUsername", 
	        query = "FROM Users s WHERE s.Username = :Username"),
	    }
	)
public class Users{


	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="UserID")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer UserID;
	
	@Column(name="Username", unique=true, nullable=false, length = 50)
	private String Username;
	
	@Column(name="Password", unique = false, nullable = false, length = 50)
	private String Password;
	
	@Column(name="FirstName", unique = false, nullable = false, length = 100)
	private String FirstName;
	
	@Column(name="LastName", unique = false, nullable = false, length = 100)
	private String LastName;
	
	@Column(name="Email", unique = true, nullable = false, length = 150)
	private String Email;

	//@Enumerated(EnumType.STRING)
//	@Enumerated(value = EnumType.STRING)
//	@Column(name="UserRole", unique = false, nullable = false, columnDefinition = "varchar(25) default 'OTHER'")
//	private USER_ROLES UserRole;
	
	
	public Users() {
	}
	
	public Users(Integer UserID, String Username, String Password) {
		this.UserID = UserID;
		this.Username = Username;
		this.Password = Password;
	}


	public Users(Integer UserID, String Username, String Password, String FirstName, String LastName, String Email) {  //removed USER_ROLES UserRole
		super();
		this.UserID = UserID;
		this.Username = Username;
		this.Password = Password;
		this.FirstName = FirstName;
		this.LastName = LastName;
		this.Email = Email;
//		this.UserRole = UserRole;
	}

	public Integer getUserID() {
		return UserID;
	}

	public void setUserID(Integer UserID) {
		this.UserID = UserID;
	}

	public String getUsername() {
		return Username;
	}

	public void setUsername(String Username) {
		this.Username = Username;
	}

	public String getPassword() {
		return Password;
	}

	public void setPassword(String Password) {
		this.Password = Password;
	}
	public String getFirstName() {
		return FirstName;
	}

	public void setFirstName(String FirstName) {
		this.FirstName = FirstName;
	}

	public String getLastName() {
		return LastName;
	}

	public void setLastName(String LastName) {
		this.LastName = LastName;
	}
	
	public String getEmail() {
		return Email;
	}

	public void setEmail(String Email) {
		this.Email = Email;
	}

//	public USER_ROLES getUSER_ROLE() {
//		return UserRole;
//	}
//
//	public void setUSER_ROLE(USER_ROLES UserRole) {
//		this.UserRole = UserRole;
//	}

	@Override
	public String toString() {
		return "User [id=" + UserID + ", uname=" + Username + ", pass=" + Password + ", fname="
				+ FirstName + ", lname=" + LastName + ", email=" + Email + "]";
	}
	
}