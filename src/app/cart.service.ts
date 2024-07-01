import { Injectable } from '@angular/core';
import { Product } from './catalog/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Product[] = [];

  constructor(private http: HttpClient) { }

  add(product: Product) {
    this.cart.push(product);
    this.http.post('/api/cart', this.cart).subscribe(() => {
      console.log(product.name + ' added to cart');
    });
  }
}
