import { OrderService } from './../../services/order.service';
import { CartService } from 'src/app/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/CartItem';
import { Order } from 'src/app/models/Order';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems:CartItem[] = []
  total:number = 0
  fullname:string=''
  address:string=''
  creditCard:string=''

  constructor(private cartService:CartService, private orderService:OrderService, private router:Router){}


  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems()
    this.total = this.cartService.total
  }


  editTotal(){
    this.total = this.cartService.getTotal()
  }

  confirmeOrder(){
    const order:Order = {
      id:1,
      fullName:this.fullname,
      address:this.address,
      creditCard:this.creditCard,
      total:this.total
    }
    this.orderService.addOrder(order)
    this.router.navigate(['order']);
  }


}
