import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { CategoryComponent } from './components/categories/categories.component';


const routes: Routes = [
  { path: 'category', component: CategoryComponent },
  { path: 'products', component: ProductsComponent },

  { path: '', redirectTo: '/category', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
