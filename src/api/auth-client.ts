import axios, { AxiosInstance } from 'axios';

interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterCredentials {
  email: string;
  name: string;
  password: string;
  password_confirmation: string;
}

class AuthClient {
  instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: 'https://gamepricetracer.herokuapp.com/api/auth',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  login(loginCredentials: LoginCredentials) {
    return this.instance.post('/login', { ...loginCredentials, device_name: 'web' });
  }

  register(registerCredentials: RegisterCredentials) {
    return this.instance.post('/register', registerCredentials);
  }

  logout() {
    return this.instance.get('/logout');
  }
}

const authClient = new AuthClient();

export default authClient;
