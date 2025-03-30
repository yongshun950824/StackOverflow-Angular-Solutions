import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../models/order';
import { ORDER_STATUS } from './orders.constants';
import { OrdersService } from './orders.service';
//import { Order, OrdersService } from '@bluebits/orders';
//import { ORDER_STATUS } from '../order.constants';

@Component({
  selector: 'admin-orders-list',
  templateUrl: './orders-list.component.html',
  styles: [],
})
export class OrdersListComponent implements OnInit {
  orders: Order[] = [];
  orderStatus = ORDER_STATUS;
  orderStatusList: any[] = [];
  constructor(
    private ordersService: OrdersService /*, private router: Router*/
  ) {}

  ngOnInit(): void {
    this._getOrders();

    this.getOrderStatusList();
  }

  _getOrders() {
    this.ordersService.getOrders().subscribe((orders) => {
      console.log(orders);
      this.orders = orders;
    });
  }

  getOrderStatusList() {
    Object.keys(this.orderStatus).forEach((x) =>
      this.orderStatusList.push(this.orderStatus[x])
    );
  }

  getOrderStatus(status: string) {
    let orderStatus = this.orderStatusList.find((x) => x.label == status);

    return orderStatus;
  }
}
