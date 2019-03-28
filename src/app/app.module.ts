import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import {LineItemComponent} from './line-item/line-item.component';
import { OrderComponent } from './order/order.component';
import { OrderService } from './core/order.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,  LineItemComponent, OrderComponent ],
  bootstrap:    [ AppComponent ],
  providers: [OrderService]
})
export class AppModule { }
