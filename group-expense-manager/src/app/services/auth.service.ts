import { Injectable } from '@angular/core';

interface User {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: User[] = []; // Initialize as an empty array
  private loggedInUser: User | null = null;

  constructor() {}

  login(username: string, password: string): boolean {
    // Check if the user exists in the registered users
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      this.loggedInUser = user; // Set logged in user
      return true; // Successful login
    }
    return false; // Failed login
  }

  register(username: string, password: string): boolean {
    // Check if username is already taken
    const existingUser = this.users.find(u => u.username === username);
    if (existingUser) {
      return false; // Failed registration: user already exists
    }

    // Add the new user to the users array
    this.users.push({ username, password });
    return true; // Successful registration
  }

  getLoggedInUser(): User | null {
    return this.loggedInUser; // Return currently logged-in user
  }
}
