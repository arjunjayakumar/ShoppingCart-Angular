import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public c:CartService) { }
  
  total:number=0
  currentitems:any=[]

  ngOnInit(): void {
    for(let a of this.c.itemcart){
      this.currentitems.push(a)
      this.c.totalprice+=a.qty*a.price
      this.total=this.c.totalprice}
    }

  currentQXP:number=0 //current qty*price
  newQXP:number=0 //updated qty*price

  qtyadd(i:any){
    for(let b of this.currentitems){
      if(b.id==i.id){
        this.currentQXP=b.qty*b.price
        b.qty=b.qty+1
        this.newQXP=b.qty*b.price
        this.c.totalprice=(this.c.totalprice-this.currentQXP)+this.newQXP
      }
    }

  this.total=this.c.totalprice
  }

  
}
