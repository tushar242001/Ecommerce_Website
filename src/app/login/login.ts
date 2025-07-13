import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { SecurityService } from '../services/security.service';
import { LoginUser } from '../models/app.securitymodels';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  userEmail:string ;
  password:string;

  constructor(private serv : SecurityService, private router:Router) {
    this.userEmail='';
    this.password='';
  }
  ngOnInit() {
  }
  // loginUser()
  // {
  //   const user:LoginUser={
  //     Email:this.userEmail,
  //     Password:this.password,
  //   };

  //   this.serv.authUser(user).subscribe(
  //     (response:any)=>{
  //       console.log('Login successful',response);
  //       if(response.token){
  //         sessionStorage.setItem('authToken',response.token);
  //         sessionStorage.setItem('userEmail',this.userEmail);
  //         alert('Login successful');
  //         this.router.navigate(['/user']);
  //       }
  //       else{
  //         alert('Login failed :Token not received');
  //       }
  //     },
  //     (error)=>{
  //       console.error('Login failed : ',error);
  //       alert('Login failed');
  //     }
  //   );
  // }
  loginUser() {
    if(this.userEmail=='Tushar@gmail.com' && this.password=='Tushar@123')
    {
      alert('Login successful');
      this.router.navigate(['/user']);
    }
    else
    {
      alert('Login failed');
    }
  }
}
