package registration;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import models.Users;

@Service //same as component
public class UserService {

	private final UserRepository userRepository;

	 @Autowired
	 public UserService(UserRepository userRepository) {
	   this.userRepository = userRepository;
	 }
	
	 public List<Users> getUsers() {
	   return userRepository.findAll();
	 }
	
	 public void addNewUser(Users user) {
	   Optional<Users> userByUsername = userRepository.findUserByUsername(user.getUsername());
	   Optional<Users> userByEmail = userRepository.findUserByEmail(user.getEmail());
	   
	   if(userByUsername.isPresent()) {
	     throw new IllegalStateException("Username is taken");
	   }else if(userByEmail.isPresent()) {
	     throw new IllegalStateException("Email is taken");
	   }
	   
	   userRepository.save(user);
	   System.out.println(user);
	 }
	
	 public void deleteStudent(Long userId) {
	   boolean exists = userRepository.existsById(userId);
	   if (!exists)
	   {
	     throw new IllegalStateException("user ID: " + userId + " does not exist");
	   }
	   userRepository.deleteById(userId);
	 }
}