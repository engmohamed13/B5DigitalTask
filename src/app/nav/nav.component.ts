import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductsService } from '../products/servies/products.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  selectCategory: string;
  categories: string[] = [];
  @Output() onSelectedCategory = new EventEmitter<string>();

  constructor(private _productsService: ProductsService) { }

  ngOnInit(): void {
    this.getCategories();
  }


  getCategories() {
    this._productsService.getCategories().subscribe(res => {
      this.categories = res;
    }, error => {

    });
  }

  getCategoryProducts(category: string) {
    this.selectCategory = category;
    this._productsService.aClickedEventCategory.emit(category);
  }
}
