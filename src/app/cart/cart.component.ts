import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Product } from '../catalog/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  private cart: Product[] = [];
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getCart().subscribe({
      next: (cart) => (this.cart = cart),
    });
  }

  get cartItems() {
    return this.cart;
  }

  get cartTotal() {
    return this.cart.reduce((prev, next) => {
      let discount = next.discount && next.discount > 0 ? 1 - next.discount : 1;
      return prev + next.price * discount;
    }, 0);
  }

  removeFromCart(product: Product) {
    this.cartService.remove(product);
  }

  getImageUrl(product: Product) {
    if (!product) return '';
    return '/assets/images/robot-parts/' + product.imageName;
  }
}
