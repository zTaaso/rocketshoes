import { all, call, put, select, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';

import { formatPrice } from '../../../utils/format';
import alertMessage from '../../../utils/alert';
import { updateAmountSuccess, addToCartSuccess } from './actions';

function* addToCart({ id }) {
    const product = yield select((state) =>
        state.cart.find((p) => p.id === id)
    );
    // console.log(product);

    const stock = yield call(api.get, `/stock/${id}`);
    const stockAmount = stock.data.amount;
    const currentAmount = product ? product.amount : 0;

    const newAmount = currentAmount + 1;

    if (stockAmount < newAmount) {
        alertMessage();
        return;
    }

    if (product) {
        yield put(updateAmountSuccess(newAmount, id));
    } else {
        const response = yield call(api.get, `/products/${id}`);

        const data = {
            ...response.data,
            amount: 1,
            formatedPrice: formatPrice(response.data.price),
        };

        yield put(addToCartSuccess(data));
    }
}

function* updateAmount({ amount, id }) {
    if (amount <= 0) {
        return;
    }

    const stock = yield call(api.get, `/stock/${id}`);
    const stockAmount = stock.data.amount;

    if (amount > stockAmount) {
        alertMessage();
        return;
    }

    yield put(updateAmountSuccess(amount, id));
}

export default all([
    takeLatest('@cart/ADD_REQUEST', addToCart),
    takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
