import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl: string = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}
  getProducts(category: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/api/Products/ByCategory`, {
      headers: {
        'Content-Type': 'application/json'
      },
      params: {
        category: category
      }
    });
  }
  getProfile(userEmail: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/api/Users/GetUserByEmail`, {
      headers: {
        'Content-Type': 'application/json'
      },
        params: {
            email: userEmail
        }
    });
  }
  getProductByName(searchText: string): Observable<any[]> {

    return this.http.get<any>(`${this.baseUrl}/api/products/ByName`,{
        headers:{
            'Content-Type': 'application/json'
        },
        params: {
            searchText: searchText
        }
    });
  }

    addToCart(productId: number, userEmail: string): Observable<any> {
        const body = { productId, userEmail };
        return this.http.post<any>(`${this.baseUrl}/api/cart/AddToCart/${productId},${userEmail}`,{
        headers: {
            'Content-Type': 'application/json'
        }
        });
    }

    getCartItems(userEmail: string): Observable<any[]> {
        return this.http.get<any>(`${this.baseUrl}/api/cart/GetCartItemsByEmail/${userEmail}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    removeFromCart(productId: number): Observable<any> {
        return this.http.delete<any>(`${this.baseUrl}/api/cart/RemoveFromCart/${productId}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    
}