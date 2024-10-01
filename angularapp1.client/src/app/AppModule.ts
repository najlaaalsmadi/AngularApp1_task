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


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        SliderComponent,
    CategoryComponent,
    ProductsComponent,

    FooterComponent,

    ],
  imports: [
        BrowserModule, HttpClientModule,
      AppRoutingModule,
      RouterModule.forRoot([
        { path: "category", component: CategoryComponent },
        { path: "product", component: ProductsComponent },
        { path: '', component: CategoryComponent, pathMatch: 'full' },
          { path: 'products/:categoryId', component: ProductsComponent }  // مسار صفحة المنتجات


      ])

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
