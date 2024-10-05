import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent {
  image: any; // لتخزين الصورة المختارة

  constructor(private _ser: ProductService, private _router: Router) { }

  // دالة لتغيير الصورة
  changeImage(event: any) {
    this.image = event.target.files[0];
  }

  // دالة لإرسال الخدمة الجديدة
  addnewService(data: any) {
    const formData = new FormData();

    // إضافة الحقول إلى FormData
    for (let key in data) {
      formData.append(key, data[key]);
    }

    // إضافة الصورة
    if (this.image) {
      formData.append("ServiceImage", this.image);
    }

    // إرسال البيانات إلى API
    this._ser.addService(formData).subscribe(() => {
      alert("تمت إضافة الخدمة بنجاح");
    }, (error: any) => {
      console.error("حدث خطأ:", error);
      alert("الخدمة موجودة مسبقاً.");
    });
  }
}
