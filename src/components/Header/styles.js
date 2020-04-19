import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const Cart = styled(Link)`
	display: flex;
	align-items: center;
	text-decoration: none;
	transition: filter 0.5s;

	&:hover {
		filter: brightness(0.6);
	}

	div {
		text-align: right;
		margin-right: 10px;

		strong {
			display: block;
			color: #fff;
		}

		span {
			font-size: 12px;
			color: #999;
		}
	}
`;
