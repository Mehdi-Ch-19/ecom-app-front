import { Category } from "./category";
import { Review } from "./review";

export class Product{
    id? : number;
    productTitle? : string;
    imageUrl? : string;
    description? : string;
    numReviews? : number;
    addeedAt?:Date;
    price?:number;
    countInStock? : number ;
    rating?:number;
    category? :Category;
    reviews? : Review[];
    iswishlist :boolean = false
}