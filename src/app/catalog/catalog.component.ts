import { Component, inject } from '@angular/core';
import { Product } from './product.model';
import { ProductService } from './product.service';
import { CartService } from '../cart/cart.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent {
  products: Product[] | undefined;
  filter: string = '';

  constructor(
    private cartSvc: CartService,
    private productSvc: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.productSvc.getProducts().subscribe((products) => (this.products = products));

    this.route.queryParams.subscribe(params => {
      this.filter = params['filter'] ?? '';
    });
  }

  getFilterProducts() {
    return this.filter === ''
      ? this.products
      : this.products?.filter((product) => product.category === this.filter);
  }

  addToCart(product: Product) {
    this.cartSvc.add(product);
    this.router.navigate(['/cart']);
  }
}
