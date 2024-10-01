import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  isLoginMode = true;
  username = '';
  password = '';
  errorMessage: string | null = null;
  successMessage:string| null=null;

  constructor(private authService: AuthService, private router: Router) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
    this.errorMessage = null; // Clear error message when switching mode
    this.successMessage=null;
  }

  onSubmit(authForm: any) {
    authForm.submitted = true;

    // Basic validation check: ensure both fields are filled
    if (this.username.trim() === '' || this.password.trim() === '') {
      this.errorMessage = 'Username and password are required.';
      return;
    }

    this.errorMessage = null; // Clear any previous error messages
    if (this.isLoginMode) {
      const success = this.authService.login(this.username, this.password);
      if (success) {
        this.router.navigate(['groups']);
      } else {
        this.errorMessage = 'Login failed. Please check your credentials.';
      }
    } else {
      const success = this.authService.register(this.username, this.password);
      if (success) {
        this.successMessage = 'Registration successful! You can now log in.'; // Set message for successful registration
      } else {
        this.errorMessage = 'Registration failed. Username already exists.'; // Set error for existing username
      }
    }
  }
}
