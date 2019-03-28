import {Component, Input, Output, EventEmitter} from '@angular/core';
import {LineItem} from '../core';
import {LineItemService} from './line-item.service';
@Component({
  selector:'app-line-item',
  templateUrl:'./line-item.component.html',
  providers:[LineItemService]
  })
export class LineItemComponent{
  constructor(private lineItemService: LineItemService){

  }
  @Output()
  lineItemSaved=new EventEmitter<LineItem>();
@Input()
set lineItem(lineItem: LineItem){
  this.lineItemService.lineItem = lineItem;
  }
get lineItem(){
  return this.lineItemService.lineItem;
}
onSave(){
  console.log('saving')
  this.lineItemService.saveLineItem(this.lineItem);
  (this.lineItem);
  this.lineItemSaved.emit(this.lineItemService.lineItem);
}
onCancel(){
  this.lineItemService.restoreLineItem();
}
}