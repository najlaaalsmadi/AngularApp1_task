import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Product } from '../models/product'; // استيراد النموذج
import { Router } from '@angular/router'; // استيراد Router

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'https://localhost:7010/api/Product'; // استبدل بالـ API الخاص بك
  private apiUrl = 'https://localhost:7010/api/User';
  private apiUrlget = 'https://localhost:7010/api/Services/getServices';
  private apiUrlup = '  https://localhost:7010/api/Services/updateService';


  services: any;

  constructor(private http: HttpClient, private router: Router) { } // استيراد Router

  addUser(user: any): Observable<any> {
    return this.http.post('https://localhost:7010/api/User/register', user);
  }

  // تأكد من أن لديك دالة login في الخدمة
  login(user: FormData): Observable<any> {
    return this.http.post<any>('https://localhost:7010/api/User/login', user);
  }

  // دالة لجلب المنتجات بناءً على CategoryId
  getProductsByCategoryId(categoryId: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/category/${categoryId}`);
  }

  addService(formData: FormData): Observable<any> {
    return this.http.post("https://localhost:7010/api/Services/addServices", formData);
  }

  getServices(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlget);
  }

  loadServices(): Observable<any[]> {
    return this.getServices().pipe(
      tap((data: any) => {
        this.services = data; // Save data for local use
      })
    );
  }

  // في ProductService
  updateService(serviceId: number, formData: FormData): Observable<any> {
    return this.http.put<any>(`${this.apiUrlup}/${serviceId}`, formData);
  }

  navigateToUpdate(serviceId: number): void {
    this.router.navigate(['/dashboard/update-service', serviceId]); // استخدام _router
  }

  getServiceById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
