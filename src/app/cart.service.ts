import { Injectable } from '@angular/core';
import { Product } from './catalog/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Product[] = [];

  constructor() { }

  add(product: Product) {
    this.cart.push(product);
    console.log(product.name + ' added to cart');
  }
}
