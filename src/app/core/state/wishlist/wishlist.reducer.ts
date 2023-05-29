import { Product } from "../../models/product";
import * as Wishlistactions from './wishlist.action'
import {Action, createReducer, on} from '@ngrx/store';


export interface wishlistProductstate {
    products: Product[];
}
export const initialState: wishlistProductstate = {
    products: []
};
    
export const wishlistReducer= createReducer(
    initialState,on(Wishlistactions.addTowishlist,(state:wishlistProductstate,{product})=>{
        return ({ ...state, products: [...state.products, product] });
    }),
    on(Wishlistactions.removeFromeishlist,(state:wishlistProductstate,{id})=>{
        return ({ ...state, products: state.products.filter(p=>{p.id != id}) });
    })
)

export function reducer(state:wishlistProductstate | undefined, action: Action): any {
      return wishlistReducer(state, action);
}