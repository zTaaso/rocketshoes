import { call, put, select, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import { addToCartSuccess, updateAmountSuccess } from './actions';
import { formatPrice } from '../../../utils/formater';

function* addToCart({ id }) {
	const product = yield select((state) => state.cart.find((p) => p.id === id));

	const stock = yield call(api.get, `/stock/${id}`);

	const stockAmount = stock.data.amount;
	const currentAmount = product ? product.amount : 0;

	const newAmount = currentAmount + 1;

	if (newAmount > stockAmount) {
		toast.error('Não temos mais estoque para esse produto!');
		return;
	}

	if (product) {
		yield put(updateAmountSuccess(id, newAmount));
	} else {
		const response = yield call(api.get, `/products/${id}`);

		const data = {
			...response.data,
			amount: 1,
			priceFormatted: formatPrice(response.data.price),
		};

		yield put(addToCartSuccess(data));
		history.push('/cart');
	}
}

function* updateAmount({ productId: id, amount }) {
	const stock = yield call(api.get, `/stock/${id}`);

	const stockAmount = stock.data.amount;

	if (amount <= 0) {
		toast.info('O produto não pode ter quantidade igual a zero.');
		return;
	}

	if (amount > stockAmount) {
		toast.error('Não temos mais estoque para esse produto!');
		return;
	}

	yield put(updateAmountSuccess(id, amount));
}

export default all([
	takeLatest('@cart/ADD_REQUEST', addToCart),
	takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
