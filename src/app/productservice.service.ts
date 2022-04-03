import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor() { }
  getProductDetails(){
    return fetch("http://localhost:4200/assets/Product.json")
  }
}
