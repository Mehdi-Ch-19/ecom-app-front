import { Customer } from "./customer";
import { ProductItem } from "./productitem";
import { ShippinAdresse } from "./shippinAdresse";

export class Order{
    orderId?:string;
    customerId?:number;
    orderDate?:Date
    status?:string;
    totalamount?:number;
    productItem?:ProductItem[];
    shippingAdresse?:ShippinAdresse;
    customer?:Customer
}