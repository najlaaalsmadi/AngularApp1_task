import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./components/footer/footer.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ProductsComponent } from "./components/products/products.component";
import { SliderComponent } from "./components/slider/slider.component";
import { CategoryComponent } from "./components/categories/categories.component";
import { RouterModule } from "@angular/router";
import { RegisterComponent } from "./register/register.component";
import { FormsModule } from "@angular/forms"; // تأكد من استيراد FormsModule
import { LoginComponent } from "./login/login.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    CategoryComponent,
    ProductsComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent
// إضافة RegisterComponent هنا
  ],
  imports: [
    FormsModule, // تأكد من إضافة FormsModule هنا
    BrowserModule,
    HttpClientModule, // استخدام HttpClientModule
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: CategoryComponent, pathMatch: 'full' },
      { path: 'products/:categoryId', component: ProductsComponent }, // مسار صفحة المنتجات
      { path: 'register', component: RegisterComponent } // مسار صفحة التسجيل
    ])
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
