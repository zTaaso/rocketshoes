import React from 'react';
import {
	MdRemoveCircleOutline,
	MdAddCircleOutline,
	MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
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
					<tr>
						<td>
							<img
								src="https://http2.mlstatic.com/tenis-feminino-sapatenis-slip-on-akatsuki-naruto-casual-D_NQ_NP_635119-MLB32775575673_112019-F.jpg"
								alt="Tênis"
							/>
						</td>
						<td>
							<strong>Tênis naruto</strong>
							<span>R$200,50</span>
						</td>
						<td>
							<div>
								<button type="button">
									<MdRemoveCircleOutline size={20} color="#7159c1" />
								</button>

								<input type="number" readOnly value={1} />

								<button type="button">
									<MdAddCircleOutline size={20} color="#7159c1" />
								</button>
							</div>
						</td>
						<td>
							<strong>R$258,80</strong>
						</td>
						<td>
							<button type="button">
								<MdDelete size={20} color="#7159c1" />
							</button>
						</td>
					</tr>
				</tbody>
			</ProductTable>

			<footer>
				<button type="button">Finalizar pedido</button>

				<Total>
					<span>TOTAL</span>
					<strong>R$500,00</strong>
				</Total>
			</footer>
		</Container>
	);
}
