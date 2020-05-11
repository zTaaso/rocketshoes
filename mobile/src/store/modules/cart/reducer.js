import { produce } from 'immer';

function cart(state = [], action) {
    switch (action.type) {
        case '@cart/ADD_SUCCESS':
            return produce(state, (draft) => {
                const { product } = action;
                draft.push(product);
                console.log(draft);
            });

        case '@cart/REMOVE_FROM_CART':
            return produce(state, (draft) => {
                const productIndex = draft.findIndex((p) => p.id === action.id);

                draft.splice(productIndex, 1);
            });

        case '@cart/UPDATE_AMOUNT_SUCCESS':
            return produce(state, (draft) => {
                const productIndex = draft.findIndex((p) => p.id === action.id);

                draft[productIndex].amount = action.amount;
            });
        default:
            return state;
    }
}

export default cart;
