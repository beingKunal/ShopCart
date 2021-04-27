import { Product } from "src/app/Products/_Models/Product";

export interface Cart{
  id:number,
  products:Product[],
  date : Date
}
