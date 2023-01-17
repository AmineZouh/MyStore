import { OrderService } from './../../services/order.service';
import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/Order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  order:Order = new Order()

  constructor(private orderService:OrderService){}

  ngOnInit(): void {
      this.order = this.orderService.getOrder()
  }

}
