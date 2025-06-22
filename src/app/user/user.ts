import { Component } from '@angular/core';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';  
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-user',
  imports: [Footer, Header, CommonModule, RouterModule, FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {

}
