import { Product } from './Product';


export class CartItem{
  id?:number
  product:Product
  quantity:number

  constructor(){
    this.id=1
    this.product = new Product()
    this.quantity = 1
  }
}