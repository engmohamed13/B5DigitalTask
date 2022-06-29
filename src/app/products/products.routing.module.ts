import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridProductsComponent } from './components/grid-products/grid-products.component';

const routes: Routes = [
  {path:'',component:GridProductsComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
