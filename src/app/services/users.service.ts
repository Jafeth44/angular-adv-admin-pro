import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { RegisterForm } from '../interfaces/register-form.interface';
import { environment } from '../../environments/environment.development';
import { LoginForm } from '../interfaces/login-form.interface';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private http = inject(HttpClient);
  constructor() { }

  public createUser(formData: RegisterForm) {
    return this.http.post(`${base_url}/users`, formData)
  }

  public loginUser(formData: LoginForm) {
    return this.http.post(`${base_url}/login`, formData)
  }
}
