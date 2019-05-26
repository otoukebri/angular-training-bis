import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/domain/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = new Array<Product>();

  constructor( private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}
