import { Component } from '@angular/core';
import { Router , RouterModule} from '@angular/router';
import { ProductService } from '../services/product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  imports: [FormsModule, CommonModule, RouterModule],
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  userEmail: string = sessionStorage.getItem('userEmail') || '';
  searchText: string = '';
  products: any[] = [];

  constructor(private serv:ProductService, private router: Router) {}

  GoToSearch(){
    console.log("Search text:", this.searchText);
    this.serv.getProductByName(this.searchText).subscribe((data: any) => {
      console.log("Fetched results:", data);
      this.products = data;
      this.router.navigate(['/user']);
    },
    (error: any) => {
      console.error("Error fetching products:", error);
      alert("An error occurred while searching for products.");
    }
  );
  }
  AddToCart(productId: number): void {
    console.log("Adding product to cart with ID:", productId);
    this.serv.addToCart(productId,this.userEmail).subscribe(
      (response: any) => {
        console.log("Product added to cart successfully:", response);
        alert("Product added to cart successfully!");
      },
      (error: any) => {
        console.error("Error adding product to cart:", error);
        alert("An error occurred while adding the product to the cart.");
      }
    );
  }

  clearSearch(): void {
    this.searchText = '';
    this.products = []; 
  }
}
