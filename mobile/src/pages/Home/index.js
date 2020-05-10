import React, { useState, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';

import api from '../../services/api';

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

export default function Home({ navigation }) {
    const [products, setProducts] = useState([]);

    async function getProducts() {
        const response = await api.get('/products');
        console.log(response.data);
        setProducts(response.data);
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
                            <ProductPrice>{product.price}</ProductPrice>
                        </ProductInfo>

                        <ProductButton>
                            <ProductAmount>
                                <AntDesign
                                    name="shoppingcart"
                                    size={30}
                                    color="#FFF"
                                />
                                <ProductAmountText>5</ProductAmountText>
                            </ProductAmount>
                            <ButtonText>Adicionar ao carrinho</ButtonText>
                        </ProductButton>
                    </ProductItem>
                )}
            />
        </Container>
    );
}
