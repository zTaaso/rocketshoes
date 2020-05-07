import { call, put, select, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';

import { addToCartSuccess, updateAmount } from './actions';
import { formatPrice } from '../../../utils/formater';

function* addToCart({ id }) {
	const product = yield select((state) => state.cart.find((p) => p.id === id));

	const stock = yield call(api.get, `/stock/${id}`);

	const stockAmount = stock.data.amount;
	const currentAmount = product ? product.amount : 0;

	const newAmount = currentAmount + 1;

	if (newAmount > stockAmount) {
		alert('Não temos mais estoque para esse produto!');
		return;
	}

	if (product) {
		yield put(updateAmount(id, newAmount));
	} else {
		const response = yield call(api.get, `/products/${id}`);

		const data = {
			...response.data,
			amount: 1,
			priceFormatted: formatPrice(response.data.price),
		};

		yield put(addToCartSuccess(data));
	}
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
