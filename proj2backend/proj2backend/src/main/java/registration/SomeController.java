package registration;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import models.Users;

@RestController
@CrossOrigin(origins = "http://localhost:8080")
@RequestMapping(path = "/test/url/")
public class SomeController {
	
	private final UserService userService;
	
	@Autowired
	public SomeController(UserService userService)
	{
		System.out.println("Hello THERE! Constructor");
		this.userService = userService;
	}
	
	@GetMapping
	public  List<Users> getUsers()  //
	{
		System.out.println("When are you here");

		return userService.getUsers();
	}
	
	@PostMapping
	public String registerNewUser(@RequestBody Users user)
	{
		System.out.println("Hello THERE! New User");
		userService.addNewUser(user);
		return "hello";
	}
}
