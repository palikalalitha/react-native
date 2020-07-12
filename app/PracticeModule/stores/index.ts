import AuthService from '../services/AuthService/index.api';

import AuthStore from './AuthStore';

const authStore = new AuthStore(new AuthService());

export default {authStore};
