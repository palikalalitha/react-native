import userLoginResponse from '../../fixtures/userLogin.json';

import {AuthService} from './index';

class AuthFixture implements AuthService {
  userLogin() {
    return Promise.resolve(userLoginResponse);
  }

  userLogout() {
    return Promise.resolve({});
  }
}

export default AuthFixture;
