import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile implements OnInit {
  user:any[] = [];
  userEmail: string = '';
  userName: string = '';
  userPhone: string = '';
  userAddress: string = '';

  constructor(private serv: ProductService, private router:Router ) { }
  ngOnInit():void {
    this.userEmail=sessionStorage.getItem('userEmail') || '';
    this.gotoProfile();
  }
  gotoProfile(){
    this.serv.getProfile(this.userEmail).subscribe(
      (response) => {
       this.userName=response[0].euserName;
       this.userPhone=response[0].euserPhone;
       this.userAddress=response[0].euserAddress;
       console.log('User profile fetched successfully:', response)
      },
      (error) => {
        console.error('Error fetching user profile:', error);
      }
    );
  }
  editProfile() {}
  logout(){
    alert('You have been logged out successfully');
    this.router.navigate(['/login']);
    sessionStorage.removeItem('authToken');
  }
}
