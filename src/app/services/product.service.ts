import { Product } from './../domain/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Array<Product> = [];

  constructor() {
    this.products.push(new Product(1, 'Adidas', 10));
    this.products.push(new Product(2, 'Nike', 50));
  }

  getProducts(): Array<Product> {
    return this.products;
  }

}
