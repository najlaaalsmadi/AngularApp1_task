import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})

export class CategoryComponent implements OnInit {

  categories: Category[] = [];
  display: boolean = false;
  fruits: string[] = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
  color:string = "red";
  selectedFruit: string = 'Banana'; // يمكنك تغيير هذا القيمة لاختبار حالات مختلفة


  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    }, error => {
      console.error('Error fetching categories', error);
    });
  }

  // التنقل إلى صفحة المنتجات مع تمرير CategoryId
  goToCategory(categoryId: number): void {
    this.router.navigate(['/products', categoryId]);  // التوجه إلى صفحة المنتجات مع تمرير CategoryId
  }
}


