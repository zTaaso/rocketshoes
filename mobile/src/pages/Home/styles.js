import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { darken } from 'polished';

export const Container = styled.View`
    background-color: #191920;
`;

export const ProductsList = styled.FlatList`
    padding-top: 10px;
`;

export const ProductItem = styled.View`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 10px;
    min-height: 200px;
    margin: 15px;
    padding: 0px;
`;

export const ProductImage = styled.Image`
    width: 250px;
    height: 200px;
    border-radius: 7px;
    flex: 1;
    align-self: center;
    margin: 15px;
`;

export const ProductInfo = styled.View`
    margin-bottom: 20px;
    padding: 10px;
`;

export const ProductTitle = styled.Text`
    font-size: 25px;
`;

export const ProductPrice = styled.Text`
    font-size: 30px;
    font-weight: bold;
`;

export const ProductButton = styled(RectButton)`
    display: flex;
    flex-direction: row;
    flex: 1;
    background: #7159c1;
    border-radius: 10px;
    margin: 0 5px 15px;
`;

export const ProductAmount = styled.View`
    display: flex;
    flex-direction: row;
    background-color: ${darken(0.05, '#7159c1')};
    flex: 1;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`;

export const ProductAmountText = styled.Text`
    color: #fff;
    font-size: 20px;
    margin-left: 5px;
`;

export const ButtonText = styled.Text`
    font-family: sans-serif;
    flex: 3;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    padding: 10px 20px;
`;
