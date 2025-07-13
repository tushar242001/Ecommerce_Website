import { Component } from '@angular/core';
import { CategoryList } from '../category-list/category-list';
import { TopSelling } from '../top-selling/top-selling';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [CategoryList, TopSelling, CommonModule, RouterModule],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main {

}
