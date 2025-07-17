import {createSlice} from "@reduxjs/toolkit";

const cart = createSlice({
    name: 'CartsSlice',
    initialState : {
        items: [],
        count: 0
    },
    reducers: {
        addItems: (state , action) => {
            state.items.push({...action.payload , quantity:1})
            state.count++;
        },
        incrementItems: (state , action) => {
            const element = state.items.find((it) => it.id === action.payload.id);
            element.quantity += 1;
            state.count++;
        },
        decremenItems: (state , action) => {
            const element = state.items.find((it) => it.id === action.payload.id);
            if(element.quantity > 1) {
                element.quantity -= 1
            }
            else {
                state.items = state.items.filter((it) => it.id !=action.payload.id);
            } 

            state.count--;
        }
    }
})

export const {addItems , incrementItems , decremenItems} = cart.actions;
export default cart.reducer;