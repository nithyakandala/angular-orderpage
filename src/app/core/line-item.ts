export class LineItem{
  constructor(
    public id:number,
    public name:string,
    public price:number,
    public quantity:number
  ){}
  clone(){
    return new LineItem(
      this.id,
      this.name,
      this.price,
      this.quantity
    )
  }
}