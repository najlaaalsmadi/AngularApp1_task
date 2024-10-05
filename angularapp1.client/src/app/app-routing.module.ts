import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { CategoryComponent } from './components/categories/categories.component';
import { LoginComponent } from './login/login.component';
import { NajlaaComponent } from './najlaa/najlaa.component';
import { AddServiceComponent } from './admain/add-service/add-service.component';
import { DashboardComponent } from './admain/dashboard/dashboard.component';
import { GetServicesComponent } from './admain/get-services/get-services.component';
import { UpdateServicesComponent } from './admain/update-services/UpdateServicesComponent';

const routes: Routes = [
  { path: 'category', component: CategoryComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'najlaa', component: NajlaaComponent },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: 'update-service/:serviceId', component: UpdateServicesComponent },
      { path: 'add-service', component: AddServiceComponent },
      { path: 'get-services', component: GetServicesComponent },
    ]
  },
  { path: '', redirectTo: '/category', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'products/:categoryId', component: ProductsComponent }  // مسار صفحة المنتجات
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
