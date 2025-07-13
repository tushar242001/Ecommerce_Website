import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-category-list',
  imports: [CommonModule,RouterModule],
  templateUrl: './category-list.html',
  styleUrl: './category-list.css'
})
export class CategoryList {

}
