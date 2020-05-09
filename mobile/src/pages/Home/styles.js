import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    padding: 30px;
    background-color: #191920;
    flex: 1;
`;

export const ProductsList = styled.FlatList`
    display: flex;
    margin-top: 30px;
    flex: 1;
    background-color: gray;
`;

export const ProductItem = styled.View`
    display: flex;
    flex-direction: column;
    background-color: #fff;
`;

export const ProductImage = styled.Image`
    max-width: 170px;
    max-height: 170px;
`;

export const ProductInfo = styled.View``;

export const ProductTitle = styled.Text``;

export const ProductPrice = styled.Text``;

export const ProductButton = styled(RectButton)``;

export const ButtonText = styled.Text``;
