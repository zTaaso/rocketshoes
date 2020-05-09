import React from 'react';
import { AntDesign } from '@expo/vector-icons';

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
} from './styles';

import tenis from '../../../assets/naruto.jpg';

export default function Home({ navigation }) {
    return (
        <Container>
            <ProductsList
                data={[1]}
                keyExtractor={(i) => String(i)}
                renderItem={(item) => (
                    <ProductItem>
                        <ProductImage
                            width={50}
                            height={50}
                            resizeMode="contain"
                            source={tenis}
                        />
                        <ProductInfo>
                            <ProductTitle>
                                Tênis naruto muito louco
                            </ProductTitle>
                            <ProductPrice>R$190,00</ProductPrice>
                        </ProductInfo>

                        <ProductButton>
                            <AntDesign name="shoppingcart" size={25} />
                            <ButtonText>Adicionar ao carrinho</ButtonText>
                        </ProductButton>
                    </ProductItem>
                )}
            />
        </Container>
    );
}
