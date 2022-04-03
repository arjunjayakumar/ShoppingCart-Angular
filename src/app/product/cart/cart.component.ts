import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public c:CartService) { }

  ngOnInit(): void {
    for(let a of this.c.itemcart){
    this.currentitems.push(a)
    this.total=a.qty*a.price
  }}
  
  currentitems:any=[]

  qtyadd(i:any){
    for(let b of this.currentitems){
      if(b.id==i.id){
        b.qty++
        this.total+=b.qty*b.price
      }
    }

    //this.currentitems.filter(obj=>{return obj.id===i.id})
  }

  total:number=0
}
