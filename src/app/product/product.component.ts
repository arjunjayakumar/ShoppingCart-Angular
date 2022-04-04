import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
Plist:any=[]
  constructor(public pl:ProductserviceService,public c1:CartService) { }

  ngOnInit(): void {
  this.pl.getProductDetails().then(x=>x.json()).then(data=>this.Plist=data)
  this.c1.itemcart=this.cartitems
  }

  cartitems:any=[]
  addtocart(event:any){
    event.qty++
    this.cartitems.push(event)
    console.log(event)
  }
}
