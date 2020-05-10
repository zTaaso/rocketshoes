import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FlatList } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';

import * as cartActions from '../../store/modules/cart/actions';

import {
    Container,
    CartArea,
    Product,
    ProductRow,
    ProductImage,
    ProductInfo,
    ProductTitle,
    ProductPrice,
    RemoveItemButton,
    ProductOptions,
    ProductQuantity,
    AddButton,
    ProductAmountText,
    RemoveButton,
    ProductSubtotal,
    CartInfo,
    TotalText,
    TotalValue,
    CartButton,
    CartButtonText,
} from './styles';

function Cart({ cart, addToCart }) {
    function handleAddProduct(product) {
        addToCart(product);
    }

    return (
        <Container>
            <CartArea>
                <FlatList
                    data={cart}
                    keyExtractor={(i) => String(i.id)}
                    style={{ maxHeight: 500 }}
                    renderItem={({ item: product }) => (
                        <Product>
                            <ProductRow>
                                <ProductImage
                                    source={{
                                        uri: product.image,
                                    }}
                                />
                                <ProductInfo>
                                    <ProductTitle>{product.title}</ProductTitle>
                                    <ProductPrice>
                                        {product.formatedPrice}
                                    </ProductPrice>
                                </ProductInfo>

                                <RemoveItemButton>
                                    <Ionicons
                                        name="md-trash"
                                        size={25}
                                        color="#7159c1"
                                    />
                                </RemoveItemButton>
                            </ProductRow>

                            <ProductOptions>
                                <ProductQuantity>
                                    <RemoveButton>
                                        <AntDesign
                                            name="minuscircleo"
                                            size={20}
                                            color="#7159c1"
                                        />
                                    </RemoveButton>
                                    <ProductAmountText>
                                        {product.amount}
                                    </ProductAmountText>
                                    <AddButton
                                        onPress={() =>
                                            handleAddProduct(product)
                                        }
                                    >
                                        <AntDesign
                                            name="pluscircleo"
                                            size={20}
                                            color="#7159c1"
                                        />
                                    </AddButton>
                                </ProductQuantity>

                                <ProductSubtotal> R$200,00 </ProductSubtotal>
                            </ProductOptions>
                        </Product>
                    )}
                />

                <CartInfo>
                    <TotalText>Total</TotalText>
                    <TotalValue>R$200,00</TotalValue>
                </CartInfo>

                <CartButton>
                    <CartButtonText>Finalizar pedido</CartButtonText>
                </CartButton>
            </CartArea>
        </Container>
    );
}

const mapStateToProps = (state) => ({
    cart: state.cart,
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(cartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
