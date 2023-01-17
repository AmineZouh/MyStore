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

  ngOnInit(): void {
      console.log('the quantity is : ', this.cartItem.quantity)
      this.quantity = this.cartItem.quantity
  }

  constructor(private cartService:CartService){}

  editTotal(cartItem:CartItem){
    console.log('edit total function invoked successfully')
    cartItem.quantity = this.quantity
    this.cartService.editTotal(cartItem)
    this.totalChanged.emit()
  }


}
