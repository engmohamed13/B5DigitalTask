import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product, ResponseResult } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  @Output() aClickedEventCategory = new EventEmitter<string>();
  @Output() aClickedEventSearch = new EventEmitter<string>();
  storeProducts: Product[] = [];

  constructor(private http: HttpClient) { }

  public getProducts(limit: number = 30, skip: number = 30, category: any) {

    var params = new HttpParams()
      .set('limit', limit)
      .set('skip', skip)
      ;
    if (category == '' || category == undefined) {
      return this.http.get<ResponseResult>(environment.port + "/products", { params: params });
    }
    else {
      return this.http.get<ResponseResult>(environment.port + "/products/category/" + category, { params: params });
    }
  }

  public search(limit: number = 30, skip: number = 30, inputSearch: string) {

    var params = new HttpParams()
      .set('q', inputSearch);
    return this.http.get<ResponseResult>(environment.port + "/products/search", { params: params });
  }

  public getCategories() {
    return this.http.get<string[]>(environment.port + "/products/categories");
  }

  setProduct(product: Product) {
    this.storeProducts.push(product);
  }

  reomveProduct(product: Product) {
    var index = this.storeProducts.indexOf(product);
    this.storeProducts.splice(index, 1);
  }

  getCountProducts(): number {
    return this.storeProducts.length;
  }
}
