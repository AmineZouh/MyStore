import { CartService } from 'src/app/services/cart.service';
import { CartItem } from './../../models/CartItem';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem:CartItem = new CartItem();
  quantity:number = this.cartItem.quantity
  @Output() totalChanged:EventEmitter<number> = new EventEmitter()
  @Output() itemRemoved:EventEmitter<CartItem> = new EventEmitter<CartItem>()

  ngOnInit(): void {
      this.quantity = this.cartItem.quantity
  }

  constructor(private cartService:CartService){}

  editTotal(quantity:number){
    console.log('the new quantity after changes : ', quantity)
    this.cartItem.quantity = quantity
    this.cartService.editTotal(this.cartItem)
    this.totalChanged.emit()
  }

  removeItem(cartItem:CartItem){
    this.itemRemoved.emit(cartItem)
  }


}
