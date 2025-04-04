import { createSlice , PayloadAction} from "@reduxjs/toolkit";
import { Pizza } from "../data/menu-items";


export type CartItem = Pizza & {
    quantity: number;
}

interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<Pizza>) => {
            const matchingPizza = state.items.find(existingItem => {
                return existingItem.id === action.payload.id;
            });

            if(!matchingPizza) {
                state.items.push({
                    ...action.payload,
                    quantity: 1,
                });
            }
            else{
                matchingPizza.quantity++;
            }

        }
    }
});

export const {addItem}= cartSlice.actions;

const cartReducer = cartSlice.reducer;
export default cartReducer;