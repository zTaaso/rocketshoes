import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { darken } from 'polished';

export const Container = styled.View`
    background-color: #191920;
    height: 100%;
`;

export const CartArea = styled.View`
    background-color: #fff;
    margin-top: 10px;
    margin: 10px;
    padding: 5px;
    border-radius: 10px;
`;

export const Product = styled.View`
    display: flex;
    flex-direction: column;
`;

export const ProductRow = styled.View`
    display: flex;
    flex-direction: row;
    padding: 5px;
    margin-bottom: 5px;
`;

export const ProductImage = styled.Image`
    min-width: 75px;
    height: 65px;
`;

export const ProductInfo = styled.View`
    display: flex;
    flex-direction: column;
    padding: 5px;
    width: 240px;
`;

export const ProductTitle = styled.Text`
    color: #000;
    font-size: 15px;
    font-weight: 700;
`;

export const ProductPrice = styled.Text`
    font-weight: bold;
    font-size: 20px;
    margin-top: 0px;
    flex-wrap: wrap;
`;

export const RemoveItemButton = styled(RectButton)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
`;

export const ProductOptions = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: ${darken(0.09, '#fff')};
    padding: 10px 5px;
    border-radius: 9px;
`;

export const ProductQuantity = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px;
`;

export const AddButton = styled(RectButton)``;

export const ProductAmountText = styled.Text`
    font-size: 16px;
    margin: 0 10px;
    background: #fff;
    padding: 0 20px;
`;

export const RemoveButton = styled(RectButton)``;

export const ProductSubtotal = styled.Text`
    font-size: 16px;
    font-weight: bold;
`;

export const CartInfo = styled.View`
    display: flex;
    align-items: center;
    margin-top: 10px;
`;

export const TotalText = styled.Text`
    color: #999;
    font-size: 15px;
    font-weight: bold;
`;

export const TotalValue = styled.Text`
    font-size: 25px;
    font-weight: bold;
`;

export const CartButton = styled(RectButton)`
    background-color: #7159c1;
    padding: 10px 30px;
    border-radius: 7px;
    margin-top: 15px;
`;

export const CartButtonText = styled.Text`
    color: #fff;
    text-align: center;
    text-transform: uppercase;
    font-size: 17px;
    font-weight: bold;
`;

export const EmptyCart = styled.View`
    display: flex;
    flex-direction: column;
    padding: 20px;
    align-items: center;
`;

export const EmptyCartText = styled.Text`
    font-size: 20px;
    font-weight: bold;
`;
