import { Product } from '../../domain/product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  selectedProduct: Product; // = this.productService.getProducts()[0];

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.selectedProduct = this.productService.getProducts()
        .filter(p => p.id === Number(params.id))[0];
      // this.productService.getProducts().forEach((product: Product) => {
      //       if (product.id === Number(params.id)) {
      //         this.selectedProduct = product;
      //       }
      //   });
    });
  }

  back() {
    console.log(`back btn clicked`);
    this.router.navigate(['/']);
  }
}
