import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FlatList } from 'react-native';
import Proptypes from 'prop-types';
import { Ionicons, AntDesign, MaterialIcons } from '@expo/vector-icons';

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
    EmptyCart,
    EmptyCartText,
} from './styles';
import { formatPrice } from '../../utils/format';

function Cart({ cart, formatedTotal, removeFromCart, updateAmount }) {
    function handleRemoveProduct(id) {
        removeFromCart(id);
    }

    function increaseAmount(product) {
        updateAmount(product.amount + 1, product.id);
    }

    function decreaseAmount(product) {
        updateAmount(product.amount - 1, product.id);
    }

    return (
        <Container>
            <CartArea>
                {!cart.length ? (
                    <EmptyCart>
                        <MaterialIcons
                            name="remove-shopping-cart"
                            size={70}
                            color="#999"
                        />
                        <EmptyCartText>Seu carrinho está vazio.</EmptyCartText>
                    </EmptyCart>
                ) : (
                    <>
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
                                            <ProductTitle>
                                                {product.title}
                                            </ProductTitle>
                                            <ProductPrice>
                                                {product.formatedPrice}
                                            </ProductPrice>
                                        </ProductInfo>

                                        <RemoveItemButton
                                            onPress={() =>
                                                handleRemoveProduct(product.id)
                                            }
                                        >
                                            <Ionicons
                                                name="md-trash"
                                                size={25}
                                                color="#7159c1"
                                            />
                                        </RemoveItemButton>
                                    </ProductRow>

                                    <ProductOptions>
                                        <ProductQuantity>
                                            <RemoveButton
                                                onPress={() =>
                                                    decreaseAmount(product)
                                                }
                                            >
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
                                                    increaseAmount(product)
                                                }
                                            >
                                                <AntDesign
                                                    name="pluscircleo"
                                                    size={20}
                                                    color="#7159c1"
                                                />
                                            </AddButton>
                                        </ProductQuantity>

                                        <ProductSubtotal>
                                            {' '}
                                            {product.formatedSubtotal}{' '}
                                        </ProductSubtotal>
                                    </ProductOptions>
                                </Product>
                            )}
                        />

                        <CartInfo>
                            <TotalText>Total</TotalText>
                            <TotalValue>{formatedTotal}</TotalValue>
                        </CartInfo>

                        <CartButton>
                            <CartButtonText>Finalizar pedido</CartButtonText>
                        </CartButton>
                    </>
                )}
            </CartArea>
        </Container>
    );
}

const mapStateToProps = (state) => ({
    cart: state.cart.map((p) => ({
        ...p,
        formatedSubtotal: formatPrice(p.price * p.amount),
    })),
    formatedTotal: formatPrice(
        state.cart.reduce((total, p) => p.amount * p.price + total, 0)
    ),
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(cartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

Cart.propTypes = Proptypes.shape({
    cart: Proptypes.array,
    formatedTotal: Proptypes.string,
    removeFromCart: Proptypes.func,
    updateAmount: Proptypes.func,
}).isRequired;
