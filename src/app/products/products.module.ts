import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductsRoutingModule } from './products.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { GridProductsComponent } from './components/grid-products/grid-products.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    GridProductsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ProductsRoutingModule,
    RouterModule,
    InfiniteScrollModule
  ]
})
export class ProductsModule { }
