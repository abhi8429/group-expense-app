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

  constructor() {
    // Load users from localStorage if available
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    }

    // Load the logged-in user from localStorage
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      this.loggedInUser = JSON.parse(storedUser);
    }
  }

  login(username: string, password: string): boolean {
    // Check if the user exists in the registered users
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      this.loggedInUser = user; // Set logged-in user
      localStorage.setItem('loggedInUser', JSON.stringify(user)); // Save user to localStorage
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

    // Update localStorage
    localStorage.setItem('users', JSON.stringify(this.users));
    localStorage.setItem('loggedInUser', JSON.stringify({ username, password })); // Save the new user
    return true; // Successful registration
  }

  logout() {
    this.loggedInUser = null; // Clear logged-in user
    localStorage.removeItem('loggedInUser'); // Remove user from localStorage
  }

  getLoggedInUser(): User | null {
    return this.loggedInUser; // Return currently logged-in user
  }

  isLoggedIn(): boolean {
    return this.loggedInUser !== null; // Check if user is logged in
  }
}
