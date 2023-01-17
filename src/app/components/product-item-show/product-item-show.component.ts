import { CartItem } from 'src/app/models/CartItem';
import { CartService } from './../../services/cart.service';
import { ProductService } from './../../services/product.service';
import { Product } from './../../models/Product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-item-show',
  templateUrl: './product-item-show.component.html',
  styleUrls: ['./product-item-show.component.css']
})
export class ProductItemShowComponent implements OnInit {

  product:Product = new Product()
  quantity:string = "1"

  constructor(private productService:ProductService, private route:ActivatedRoute, private cartService:CartService){}

  ngOnInit(){
    const id = this.route.snapshot.params?.['id']
    this.productService.getProducts().subscribe(res=>{
      this.product = res.filter(p=>{
        return p.id===parseInt(id)
      })[0]
    })
  }

  addToCart(product:Product, quantity:string){
    const cartItem:CartItem = {product:product, quantity:parseInt(quantity)}
    this.cartService.addCartItem(cartItem)
    alert('Item added')
  }

}
