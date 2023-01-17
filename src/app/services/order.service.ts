import { Injectable } from '@angular/core';
import { Order } from '../models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private order:Order = new Order()

  constructor() { }

  addOrder(order:Order){
    this.order = order
  }

  getOrder():Order{
    return this.order
  }
}
