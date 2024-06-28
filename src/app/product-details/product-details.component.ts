import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../catalog/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input() product!: Product;
  @Output() buyEvent = new EventEmitter();

  getImageUrl(product: Product):string {
    return '/assets/images/robot-parts/' + product.imageName
  }

  getDiscountedClasses(product: Product) {
    if(product.discount > 0) return  "strikethrough";
    else return '';
  }

  buyButtonClicked() {
    this.buyEvent.emit();
  }
}
