import { Injectable } from '@angular/core';

interface User {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   private users: User[] = [{ username: 'test@gmail.com', password: 'password@123' }];
  private loggedInUser: User | null = null;  // Updated type to 'User | null'
  constructor() { }

  login(username: string, password: string): boolean {
    // Example validation (replace with real API call)
    if (username === 'test@gmail.com' && password === 'password@123') {
      return true; // Successful login
    }
    return false; // Failed login
  }

  register(username: string, password: string): boolean {
    // Example validation (replace with real API call)
    if (username && password) {
      return true; // Successful registration
    }
    return false; // Failed registration
  }
}
