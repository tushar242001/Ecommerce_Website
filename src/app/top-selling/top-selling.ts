import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductService } from '../services/product.service';
import { ProductDialog } from '../product-dialog/product-dialog';

@Component({
  selector: 'app-top-selling',
  imports: [],
  templateUrl: './top-selling.html',
  styleUrl: './top-selling.css'
})
export class TopSelling implements OnInit ,OnDestroy {
  userEmail: string =sessionStorage.getItem('userEmail') || '';
  products: any[] = [];
  category:string='all';
  private shuffleInterval: any;

  constructor(private productService: ProductService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.dialog.open(ProductDialog,{
      data: this.productService,
      width: '400px',
    });
  }
  AddToCart(productId:number): void{
    console.log('Adding product to cart : ', productId);
    this.productService.addToCart(productId, this.userEmail).subscribe({
      next: (response) => {
        console.log('Product added to cart successfully:', response);
        alert('Product added to cart successfully');
      },
      error: (error) => {
        console.error('Error adding product to cart:', error);
        alert('Error adding product to cart');
      }
    });
  }
  fetchProducts(): void {
    this.productService.getProducts(this.category).subscribe({
      next: (response) => {
        this.products = response;
        console.log('Top selling products fetched successfully:', this.products);
      },
      error: (error) => {
        console.error('Error fetching top selling products:', error);
      }
    });
  }
  startShuffling(): void {
    this.shuffleInterval = setInterval(() => {
      this.shuffleProducts();
    }, 5000); // Shuffle every 5 seconds
  }
  shuffleProducts(): void {
    for (let i = this.products.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.products[i], this.products[j]] = [this.products[j], this.products[i]];
    }
    console.log('Products shuffled:', this.products);
  }
  ngOnDestroy(): void {
    if (this.shuffleInterval) {
      clearInterval(this.shuffleInterval);
    }
  }
}
