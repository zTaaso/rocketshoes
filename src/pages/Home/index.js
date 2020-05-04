import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../utils/formater';

import { ProductList } from './styles';

import api from '../../services/api';

function Home() {
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

	return (
		<ProductList>
			{products.map((product) => (
				<li key={product.id}>
					<img src={product.image} alt={product.title} />

					<strong>{product.title}</strong>
					<span>{product.formatedPrice}</span>
					<button>
						<div>
							<MdAddShoppingCart size={20} color="#FFF" />2
						</div>

						<span>Adicionar ao carrinho</span>
					</button>
				</li>
			))}
		</ProductList>
	);
}

export default connect()(Home);
