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
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
