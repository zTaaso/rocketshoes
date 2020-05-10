import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';

import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

import { formatPrice } from '../../utils/format';

import {
    Container,
    ProductsList,
    ProductItem,
    ProductImage,
    ProductInfo,
    ProductTitle,
    ProductPrice,
    ProductButton,
    ButtonText,
    ProductAmount,
    ProductAmountText,
} from './styles';

function Home({ addToCart, stock }) {
    const [products, setProducts] = useState([]);

    async function getProducts() {
        const response = await api.get('/products');

        const data = response.data.map((p) => ({
            ...p,
            formatedPrice: formatPrice(p.price),
        }));
        setProducts(data);
    }

    function handleAddProduct(product) {
        addToCart(product);
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <Container>
            <ProductsList
                data={products}
                keyExtractor={(i) => String(i.id)}
                renderItem={({ item: product }) => (
                    <ProductItem>
                        <ProductImage
                            source={{
                                uri: product.image,
                            }}
                        />
                        <ProductInfo>
                            <ProductTitle>{product.title}</ProductTitle>
                            <ProductPrice>{product.formatedPrice}</ProductPrice>
                        </ProductInfo>

                        <ProductButton
                            onPress={() => handleAddProduct(product)}
                        >
                            <ProductAmount>
                                <AntDesign
                                    name="shoppingcart"
                                    size={30}
                                    color="#FFF"
                                />
                                <ProductAmountText>
                                    {stock[product.id] || 0}
                                </ProductAmountText>
                            </ProductAmount>
                            <ButtonText>Adicionar ao carrinho</ButtonText>
                        </ProductButton>
                    </ProductItem>
                )}
            />
        </Container>
    );
}

const mapStateToProps = (state) => ({
    stock: state.cart.reduce((stock, product) => {
        stock[product.id] = product.amount;
        return stock;
    }, {}),
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
