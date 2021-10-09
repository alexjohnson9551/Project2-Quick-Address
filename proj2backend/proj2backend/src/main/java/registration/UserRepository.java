package registration;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import models.Users;

@Repository
public interface UserRepository
    extends JpaRepository<Users, Long> {

  Optional<Users> findUserByEmail(String email);

  Optional<Users> findUserByUsername(String username);
} 