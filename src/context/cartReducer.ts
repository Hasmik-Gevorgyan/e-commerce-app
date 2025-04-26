const ACTIONS = {
    ADD_TO_CART: 'add-to-cart',
    REMOVE_FROM_CART: 'remove-from-cart',
    QUANTITY_ADJUSTMENT: 'quantity-adjustment',
    CLEAR_CART: 'clear-cart',
}

export const reducer = (state: any, action: any) => {
    const { type, payload } = action;

    switch (type) {
        case ACTIONS.ADD_TO_CART:
            const existingProduct = state.find((product: any) => product.id === payload.id);
            if (existingProduct) {
                return state.map((product: any) =>
                    product.id === payload.id
                        ? { ...product, quantity: product.quantity + (payload.quantity || 1) }
                        : product
                );
            } else {
                return [...state, { ...payload, quantity: (payload.quantity || 1) }];
            }
        case ACTIONS.REMOVE_FROM_CART:
            return state.filter((product: any) => product.id !== payload.id);
        case ACTIONS.QUANTITY_ADJUSTMENT:
            const productToAdjust = state.find((product: any) => product.id === payload.id);
            if (productToAdjust && productToAdjust.quantity + payload.quantity <= 0) {
                return state.filter((product: any) => product.id !== payload.id);
            }
            return state.map((product: any) =>
                product.id === payload.id
                    ? { ...product, quantity: payload.quantity + product.quantity }
                    : product
            );
        case ACTIONS.CLEAR_CART:
            return [];
        default:
            throw new Error(`Unknown action type: ${type}`);
    }
}