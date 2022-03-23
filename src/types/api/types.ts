export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  email: string;
  name: string;
  password: string;
  password_confirmation: string;
}

export interface NameUpdate {
  name: string;
}

export interface EmailUpdate {
  email: string;
  password: string;
}

export interface PasswordUpdate {
  old_password: string;
  new_password: string;
  new_password_confirmation: string;
}
