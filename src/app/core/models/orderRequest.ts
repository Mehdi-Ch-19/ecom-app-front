import { ProductItem } from "./productitem";
import { ShippinAdresse } from "./shippinAdresse";

export class OrderRequest{
    customerId?:number;
    totalamount?:number;
    products?:ProductItem[];
    shippingAdresse?:ShippinAdresse;
}