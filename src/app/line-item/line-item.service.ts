import {LineItem} from '../core';

export class LineItemService{
  private originalLineItem:LineItem;
  private currentLineItem:LineItem;

  set lineItem(lineItem:LineItem){
    this.originalLineItem=lineItem;
    this.currentLineItem=lineItem.clone();
  }

  get lineItem(){
    return this.currentLineItem;
  }
  saveLineItem(lineIem:LineItem){
    this.originalLineItem=this.currentLineItem;

  }
  restoreLineItem(){
    this.lineItem=this.originalLineItem;

  }
}