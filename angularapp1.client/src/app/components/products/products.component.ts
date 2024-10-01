import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']  // تأكد من تصحيح اسم الخاصية "styleUrls"
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  categoryId: number | null = null;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // الحصول على categoryId من الـ Route
    const categoryIdParam = this.route.snapshot.paramMap.get('categoryId');

    if (categoryIdParam !== null) {
      this.categoryId = +categoryIdParam; // تحويل القيمة إلى رقم

      // جلب المنتجات بناءً على CategoryId
      this.productService.getProductsByCategoryId(this.categoryId).subscribe(data => {
        this.products = data;
      }, error => {
        console.error('Error fetching products', error);
      });
    } else {
      console.error('categoryId is null');
    }
  }

}
