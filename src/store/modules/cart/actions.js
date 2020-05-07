export function addToCartRequest(id) {
	return {
		type: '@cart/ADD_REQUEST',
		id,
	};
}

export function addToCartSuccess(product) {
	return {
		type: '@cart/ADD_SUCCESS',
		product,
	};
}

export function removeFromCart(id) {
	return {
		type: '@cart/REMOVE',
		productId: id,
	};
}

export function updateAmount(id, amount) {
	return {
		type: '@cart/UPDATE_AMOUNT',
		productId: id,
		amount,
	};
}
