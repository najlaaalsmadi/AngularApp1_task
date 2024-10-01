import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = {
    name: '',
    email: '',
    password: '',
    role: ''
  };

  constructor(private _ser: ProductService, private _router: Router) { }

  ngOnInit() {
    // يمكنك إضافة أي منطق يحتاج إلى التنفيذ عند تحميل المكون هنا
  }

  addnewUser(form: NgForm) { // تأكد من استخدام NgForm
    if (form.valid) { // تحقق من صحة النموذج
      const formData = new FormData(); // استخدم FormData لتخزين البيانات

      // أضف بيانات المستخدم إلى FormData
      for (const key in this.user) {
        if (this.user.hasOwnProperty(key)) {
          formData.append(key, this.user[key as keyof typeof this.user]); // استخدم keyof لتحديد نوع المفتاح
        }
      }

      // أرسل البيانات إلى خدمة المنتج
      this._ser.addUser(formData).subscribe(
        (response) => {
          alert("User added successfully");
          this._router.navigate(['/subscription']); // توجيه المستخدم بعد النجاح
        },
        (error) => {
          console.error("Error adding user", error);
          alert("Please fill in the inputs correctly.");
        }
      );
    } else {
      alert("Form is invalid, please check your inputs.");
    }
  }
}
