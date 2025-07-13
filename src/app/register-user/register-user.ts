import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SecurityService } from '../services/security.service';
import { RegisterUsers } from '../models/app.securitymodels';

@Component({
  selector: 'app-register-user',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register-user.html',
  styleUrl: './register-user.css'
})
export class RegisterUser {
  userEmail: string = '';
  userPassword: string = '';
  userName: string = '';
  userPhone: string = '';
  userAddress: string = '';


  constructor(private http: HttpClient, private serv: SecurityService) { }

  onSubmit() {
    const RegisterUser: RegisterUsers = {
      Email: this.userEmail,
      Password: this.userPassword,
      euserName: this.userName,
      euserPhone: this.userPhone,
      euserAddress: this.userAddress
    };
    this.serv.signupUser(RegisterUser).subscribe(
      (response) => {
        console.log('User registered successfully:', response);
        this.onReset();
        // Redirect to login or another page if needed
      },
      (error) => {
        console.error('Error registering user:', error);
        // Handle error, show message to user, etc.   
      });
  }
  onReset() {
    this.userEmail = '';
    this.userPassword = '';
    this.userName = '';
    this.userPhone = '';
    this.userAddress = '';
  }
}
