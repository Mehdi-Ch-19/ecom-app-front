import { createFeatureSelector ,createSelector} from "@ngrx/store";
import * as fromwishlistreducer from './wishlist.reducer'
export const selectwishliststate = createFeatureSelector<fromwishlistreducer.wishlistProductstate>(
    'wishlist'
)
export const selectAllwidshlistProducts = createSelector(selectwishliststate,(state:fromwishlistreducer.wishlistProductstate)=>state.products)