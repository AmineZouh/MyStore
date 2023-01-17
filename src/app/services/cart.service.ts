import { CartItem } from './../models/CartItem';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems:CartItem[] = []
  total:number = 0
  counter:number=0

  constructor(private http:HttpClient) { }

  getCartItems():CartItem[]{
    return this.cartItems
  }

  addCartItem(cartItem:CartItem):void{
    this.counter++
    cartItem.id = this.counter
    this.cartItems.push(cartItem)
    this.total += cartItem.product.price*cartItem.quantity
  }

  calculateTotal(cartList:CartItem[]):number{
    let result = 0
    cartList.forEach(i=>{
      result+=i.product.price*i.quantity
    })
    return result
  }

  editTotal(cartItem:CartItem){
    this.cartItems = this.cartItems.map(c=>{
      if(c.id===cartItem.id){
        return {...c, quantity:cartItem.quantity}
      }
      return c
    })
    console.log('the total before edit is : ', this.total)
    this.total = this.calculateTotal(this.cartItems)
    console.log('the total after edit is : ', this.total)
  }

  getTotal():number{
    return this.total
  }

}
