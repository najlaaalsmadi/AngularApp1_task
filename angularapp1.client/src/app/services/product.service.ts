import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';  // استيراد النموذج
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'https://localhost:7010/api/Product';  // استبدل بالـ API الخاص بك
  private apiUrl = 'https://localhost:7010/api/User';
  constructor(private http: HttpClient) { }

  addUser(user: any): Observable<any> {
    return this.http.post('https://localhost:7010/api/User', user);
  }

  // تأكد من أن لديك دالة login في الخدمة
  login(user: FormData): Observable<any> {
    return this.http.post<any>('https://localhost:7010/api/User/login', user);
  }


  // دالة لجلب المنتجات بناءً على CategoryId
  getProductsByCategoryId(categoryId: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/category/${categoryId}`);

  }
}
