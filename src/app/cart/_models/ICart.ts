import { IProduct } from "src/app/Products/_Models/IProduct";

export interface ICart{
  id:number,
  products:IProduct[],
  date : Date
}
