import React, { useEffect, useState } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

import api from '../../services/api';

export default function Home() {
	const [products, setProducts] = useState([]);

	async function getProducts() {
		const response = await api.get('/products');

		setProducts(response.data);
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
					<span>{product.price}</span>
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
