import { CartItem } from 'src/app/models/CartItem';
import { CartService } from './../../services/cart.service';
import { Product } from './../../models/Product';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

  @Input() product:Product;
  quantity:string = "1"

  constructor(private cartService:CartService){
    this.product = new Product()
  }

  addToCart(product:Product, quantity:string):void{
    const cartItem:CartItem = {product:product, quantity:parseInt(quantity)}
    this.cartService.addCartItem(cartItem)
    alert('Item added')
  }

}
