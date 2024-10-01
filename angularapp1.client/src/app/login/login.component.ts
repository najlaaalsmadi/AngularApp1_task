import { Component } from '@angular/core';
import { ProductService } from '../services/product.service'; // تأكد من أنك تستخدم خدمة المنتج
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = {
    email: '',
    password: ''
  };

  constructor(private _ser: ProductService, private _router: Router) { }

  ngOnInit() {
    // يمكنك إضافة أي منطق يحتاج إلى التنفيذ عند تحميل المكون هنا
  }

  onSubmit(form: NgForm) { // تأكد من استخدام NgForm
    if (form.valid) { // تحقق من صحة النموذج
      const formData = new FormData(); // استخدم FormData لتخزين البيانات

      // أضف بيانات المستخدم إلى FormData
      for (const key in this.user) {
        if (this.user.hasOwnProperty(key)) {
          formData.append(key, this.user[key as keyof typeof this.user]); // استخدم keyof لتحديد نوع المفتاح
        }
      }

      // أرسل البيانات إلى خدمة المنتج
      this._ser.login(formData).subscribe( // تأكد من وجود دالة login في الخدمة
        (response: any) => {
          console.log('Login successful', response);
          localStorage.setItem('user', JSON.stringify(response)); // تخزين معلومات المستخدم
          this._router.navigate(['/category']); // توجيه المستخدم بعد النجاح
          alert('تم الدخول بنجاح'); // رسالة خطأ

        },
        (error: any) => {
          console.error("Error logging in", error);
          alert('Invalid email or password. Please try again.'); // رسالة خطأ
        }
      );
    } else {
      alert('Please fill in the form correctly.'); // رسالة توجيه في حالة عدم صحة النموذج
    }
  }
}
