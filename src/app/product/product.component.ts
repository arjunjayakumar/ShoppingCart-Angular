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
  // let cartlistitems=[...this.cartitems] 
  // const giveData=()=>{console.log("data transferred");return cartlistitems}
  // this.c1.itemcart=giveData()
  // console.log(this.c1.itemcart)
  // this.c1.itemcart.push(cartlistitems) 
  // for(let a in this.cartitems){
  //   let check=this.cartitems.includes(a)
  //   if(!check){
  //     this.c1.itemcart=this.cartitems
  //   }
  // }
  this.c1.itemcart=this.cartitems
  }

  cartitems:any=[]
  addtocart(event:any){
    event.qty++
    this.cartitems.push(event)
    console.log(this.c1.itemcart);
    console.log(event)}
}
