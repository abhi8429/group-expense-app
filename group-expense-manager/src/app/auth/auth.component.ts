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
  errorMessage: string | null = null; // Variable to hold validation error messages

  constructor(private authService: AuthService, private router: Router) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
    this.errorMessage = null; // Clear error message when switching mode
  }

  onSubmit(authForm: any) {
    authForm.submitted = true; // Mark the form as submitted

    // Basic validation check: ensure both fields are filled
    if (this.username.trim() === '' || this.password.trim() === '') {
      this.errorMessage = 'This field is required'; // Set error message
      return; // Stop further execution
    }

    // If validation passes
    this.errorMessage = null; // Clear any previous error messages
    if (this.isLoginMode) {
      const success = this.authService.login(this.username, this.password);
      if (success) {
        this.router.navigate(['groups']);
      } else {
        this.errorMessage = 'Login failed. Please check your credentials.'; // Set error message for login failure
      }
    } else {
      const success = this.authService.register(this.username, this.password);
      if (success) {
        this.router.navigate(['groups']);
      } else {
        this.errorMessage = 'Registration failed. Please try again.'; // Set error message for registration failure
      }
    }
  }
}
