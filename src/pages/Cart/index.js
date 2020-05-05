import React from 'react';
import { connect } from 'react-redux';
import {
	MdRemoveCircleOutline,
	MdAddCircleOutline,
	MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

function Cart({ cart, dispatch }) {
	const handleRemoveProduct = (product) => {
		dispatch({
			type: 'REMOVE_FROM_CART',
			productId: product.id,
		});
	};

	return (
		<Container>
			<ProductTable>
				<thead>
					<tr>
						<th />
						<th>Produto</th>
						<th>QTD</th>
						<th>Subtotal</th>
						<th />
					</tr>
				</thead>

				<tbody>
					{cart.map((product) => (
						<tr>
							<td>
								<img src={product.image} alt={product.title} />
							</td>
							<td>
								<strong>{product.title}</strong>
								<span>{product.formatedPrice}</span>
							</td>
							<td>
								<div>
									<button type="button">
										<MdRemoveCircleOutline size={20} color="#7159c1" />
									</button>

									<input type="number" readOnly value={product.amount} />

									<button type="button">
										<MdAddCircleOutline size={20} color="#7159c1" />
									</button>
								</div>
							</td>
							<td>
								<strong>{product.formatedPrice}</strong>
							</td>
							<td>
								<button type="button" onClick={() => handleRemoveProduct(product)}>
									<MdDelete size={20} color="#7159c1" />
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</ProductTable>

			<footer>
				<button type="button">Finalizar pedido</button>

				<Total>
					<span>TOTAL</span>
					<strong>
						{cart[0] ? cart.reduce((total, i) => total + i.price, 0) : 0}
					</strong>
				</Total>
			</footer>
		</Container>
	);
}

export default connect((state) => ({
	cart: state.cart,
}))(Cart);
