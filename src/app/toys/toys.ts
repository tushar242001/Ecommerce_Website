import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { MatDialog } from '@angular/material/dialog';
import { ProductDialog } from '../product-dialog/product-dialog';


@Component({
  selector: 'app-toys',
  imports: [ CommonModule, RouterModule ],
  templateUrl: './toys.html',
  styleUrl: './toys.css'
})
export class Toys implements OnInit {
   userEmail: string = '';
    products: any[] = [];
    category: string = 'Toys';

  constructor(private productService: ProductService, private dialog: MatDialog) {}
  ngOnInit() {
    
    this.fetchProducts();
  }
  openProductDialog(product: any): void {
    this.dialog.open(ProductDialog, {
      data: product,
      width: '400px'
    });
  }
  // openProductDialog(product: any): void {
  //   const dialogRef = this.dialog.open(ProductDialog, {
  //     width: '400px',
  //     data: product
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //       console.log('Dialog closed with result:', result);
  //       this.AddToCart(result.id);
  //     } else {
  //       console.log('Dialog was closed without a result');
  //     }
  //   });
  // }
  fetchProducts(): void {
    this.productService.getProducts(this.category).subscribe((data: any) => {
      this.products = data;
      console.log('Products fetched successfully:', this.products);
    }, error => {
      console.error('Error fetching products:', error);
    });
  }
  AddToCart(productId: number): void {
    console.log('Adding product to cart:', productId);
    this.productService.addToCart(productId, this.userEmail).subscribe((response: any) => {
      console.log('Product added to cart:', response);
      alert('Product added to cart successfully!');
    }, error => {
      console.error('Error adding product to cart:', error);
    });
  }



}
