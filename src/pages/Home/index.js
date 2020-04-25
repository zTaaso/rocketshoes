import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
	return (
		<ProductList>
			<li>
				<img
					src="https://http2.mlstatic.com/tenis-feminino-sapatenis-slip-on-akatsuki-naruto-casual-D_NQ_NP_635119-MLB32775575673_112019-F.jpg"
					alt="Tênis"
				/>

				<strong>Sapatênis naruto</strong>
				<span>R$125,00</span>
				<button>
					<div>
						<MdAddShoppingCart size={20} color="#FFF" />2
					</div>

					<span>Adicionar ao carrinho</span>
				</button>
			</li>

			<li>
				<img
					src="https://http2.mlstatic.com/tenis-feminino-sapatenis-slip-on-akatsuki-naruto-casual-D_NQ_NP_635119-MLB32775575673_112019-F.jpg"
					alt="Tênis"
				/>

				<strong>Sapatênis naruto</strong>
				<span>R$125,00</span>
				<button>
					<div>
						<MdAddShoppingCart size={25} color="#FFF" />2
					</div>

					<span>Adicionar ao carrinho</span>
				</button>
			</li>

			<li>
				<img
					src="https://http2.mlstatic.com/tenis-feminino-sapatenis-slip-on-akatsuki-naruto-casual-D_NQ_NP_635119-MLB32775575673_112019-F.jpg"
					alt="Tênis"
				/>

				<strong>Sapatênis naruto</strong>
				<span>R$125,00</span>
				<button>
					<div>
						<MdAddShoppingCart size={25} color="#FFF" />2
					</div>

					<span>Adicionar ao carrinho</span>
				</button>
			</li>

			<li>
				<img
					src="https://http2.mlstatic.com/tenis-feminino-sapatenis-slip-on-akatsuki-naruto-casual-D_NQ_NP_635119-MLB32775575673_112019-F.jpg"
					alt="Tênis"
				/>

				<strong>Sapatênis naruto</strong>
				<span>R$125,00</span>
				<button>
					<div>
						<MdAddShoppingCart size={25} color="#FFF" />2
					</div>

					<span>Adicionar ao carrinho</span>
				</button>
			</li>

			<li>
				<img
					src="https://http2.mlstatic.com/tenis-feminino-sapatenis-slip-on-akatsuki-naruto-casual-D_NQ_NP_635119-MLB32775575673_112019-F.jpg"
					alt="Tênis"
				/>

				<strong>Sapatênis naruto</strong>
				<span>R$125,00</span>
				<button>
					<div>
						<MdAddShoppingCart size={25} color="#FFF" />2
					</div>

					<span>Adicionar ao carrinho</span>
				</button>
			</li>

			<li>
				<img
					src="https://http2.mlstatic.com/tenis-feminino-sapatenis-slip-on-akatsuki-naruto-casual-D_NQ_NP_635119-MLB32775575673_112019-F.jpg"
					alt="Tênis"
				/>

				<strong>Sapatênis naruto</strong>
				<span>R$125,00</span>
				<button>
					<div>
						<MdAddShoppingCart size={25} color="#FFF" />2
					</div>

					<span>Adicionar ao carrinho</span>
				</button>
			</li>
		</ProductList>
	);
}
