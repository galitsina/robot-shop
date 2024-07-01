import { Component, inject } from '@angular/core';
import { Product } from './product.model';
import { CartService } from '../cart.service';
import { ProductService } from './product.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  products: Product[] | undefined;
  filter: string = '';
  // private cartSvc: CartService = inject(CartService);

  constructor (private cartSvc: CartService, private productSvc: ProductService) {
  }

  ngOnInit() {
    this.productSvc.getProducts().subscribe(products => this.products = products);
  }
  
  getFilterProducts() {
    return this.filter === '' ? this.products : this.products?.filter(product => product.category === this.filter);
  }
  
  addToCart(product: Product) {
    this.cartSvc.add(product);
  }
}
