import { createAction, props } from "@ngrx/store";
import { Product } from "../../models/product";

export const addTowishlist = createAction( '[Wishlist] add to wishlist ',(product:Product)=>({product}) );
export const removeFromeishlist = createAction( '[Wishlist] remove to wishlist ',props<{id:string}>() );