import { Component, HostListener, OnInit } from '@angular/core';
import { Product, ResponseResult } from '../../models/Product';
import { ProductsService } from '../../servies/products.service';

@Component({
  selector: 'app-grid-products',
  templateUrl: './grid-products.component.html',
  styleUrls: ['./grid-products.component.scss']
})
export class GridProductsComponent implements OnInit {

  products: ResponseResult = new ResponseResult();
  limit: number = 30;
  skip: number = 0;
  category: string = '';
  isSearch: boolean = false;
  searchInput: string = '';
  constructor(private _productsService: ProductsService) {
    this._productsService.aClickedEventCategory
      .subscribe((category: string) => {
        this.category = category;
        this.searchInput = '';
        this.isSearch = false;
        this.skip = 0;
        this.limit = 30;
        this.products = new ResponseResult();
        this.getProducts();
      });

    this._productsService.aClickedEventSearch
      .subscribe((q: string) => {
        this.skip = 0;
        this.limit = 30;
        this.isSearch = true;
        this.searchInput = q;
        this.products = new ResponseResult();
        this.search();
      });
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this._productsService.getProducts(this.limit, this.skip, this.category).subscribe(res => {
      if (this.skip > 0 && this.products?.products?.length > 0) {
        this.products?.products?.push(...res.products)
        this.products.total = res.total;
      }
      else {
        this.products = res;

      }
    }, error => {

    });
  }

  search() {
    this._productsService.search(this.limit, this.skip, this.searchInput).subscribe(res => {
      if (this.skip > 0 && this.products?.products?.length > 0) {
        this.products?.products?.push(...res.products)
        this.products.total = res.total;
      }
      else {
        this.products = res;

      }
    }, error => {

    });
  }
  onScrollDown(ev: any) {
    if (this.products?.products?.length < this.products?.total) {
      this.skip = this.products?.products?.length;
      this.limit = this.products.limit;
      this.getProducts();
    }
  }

  onScrollUp(ev: any) {

  }

  buy(item: Product) {
    var exist = this._productsService?.storeProducts?.filter(d => d.id == item.id).map(d => d.id)[0];
    if (exist)
      this._productsService.reomveProduct(item);
    else
      this._productsService.setProduct(item);
  }
}
