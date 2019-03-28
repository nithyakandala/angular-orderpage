import { Component, OnInit } from '@angular/core';
import {LineItem} from '../core';
import {OrderService} from '../core';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {
lineItems:Observable<LineItem[]>;

  constructor(private orderService:OrderService) { }

  ngOnInit() {
    this.lineItems=this.orderService.lineItems;
  

  }
  onLineItemSaved(lineItem:LineItem){
    console.log('received', lineItem)
    this.orderService.saveLineItem(lineItem);
  }

}