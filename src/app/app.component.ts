import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './products/models/Product';
import { ProductsService } from './products/servies/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'B5-Task';
  categories: string[] = [];
  selectCategory: string = '';
  inputSearch: string;
  constructor(private _productsService: ProductsService

  ) {

  }
  ngOnInit(): void {
    this.getCategories();

  }

  getCategories() {
    this._productsService.getCategories().subscribe(res => {
      this.categories = res;
    }, error => {

    });
  }

  reloadCatgeory() {
    this.inputSearch = '';
    if (this.selectCategory != '') {
      this._productsService.aClickedEventCategory.emit(this.selectCategory);
    }
    else {
      this._productsService.aClickedEventCategory.emit();

    }
  }


  search() {
    this.selectCategory = '';
    if (this.inputSearch != null && this.inputSearch != '') {
      this._productsService.aClickedEventSearch.emit(this.inputSearch);
    }
    else {
      this._productsService.aClickedEventSearch.emit();

    }
  }

  getCountProducts(): number {
    return this._productsService.getCountProducts();
  }
}
