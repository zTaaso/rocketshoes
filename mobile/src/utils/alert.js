import { Alert } from 'react-native';

export default function alertMessage() {
    Alert.alert(
        'Limite atingido!',
        'Quantidade indisponível no estoque.',
        [
            {
                text: 'OK',
                onPress: () => {},
            },
        ],
        {
            cancelable: true,
        }
    );
}
