import {AuthService} from '../../services/AuthService';

class AuthStore {
  authService: AuthService;
  constructor(authService: AuthService) {
    this.authService = authService;
  }

  // implement AuthStore
}

export default AuthStore;
