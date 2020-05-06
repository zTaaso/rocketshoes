import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../utils/formater';

import * as CartActions from '../../store/modules/cart/actions';

import { ProductList } from './styles';

import api from '../../services/api';

function Home({ stock, addToCart }) {
	const [products, setProducts] = useState([]);

	async function getProducts() {
		const response = await api.get('/products');

		const data = response.data.map((product) => ({
			...product,
			formatedPrice: formatPrice(product.price),
		}));

		setProducts(data);
	}

	useEffect(() => {
		getProducts();
	}, []);

	function handleAddProduct(product) {
		addToCart(product);
	}

	return (
		<ProductList>
			{products.map((product) => (
				<li key={product.id}>
					<img src={product.image} alt={product.title} />

					<strong>{product.title}</strong>
					<span>{product.formatedPrice}</span>
					<button onClick={() => handleAddProduct(product)}>
						<div>
							<MdAddShoppingCart size={20} color="#FFF" />
							{stock[product.id] || 0}
						</div>

						<span>Adicionar ao carrinho</span>
					</button>
				</li>
			))}
		</ProductList>
	);
}

const mapStateToProps = (state) => ({
	stock: state.cart.reduce((stock, p) => {
		stock[p.id] = p.amount;
		return stock;
	}, {}),
});

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(CartActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
