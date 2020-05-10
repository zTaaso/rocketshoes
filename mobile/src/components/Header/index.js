import React from 'react';
import * as Elements from 'react-native-elements';

import logo from '../../../assets/Logu.png';

import { ImageLogo } from './styles';

export default function Header() {
    return (
        <Elements.Header
            backgroundColor="#191921"
            containerStyle={{
                width: '100%',
                height: 64,
                borderBottomColor: '#7159c1',
            }}
            // backgroundImage={logo}
            // backgroundImageStyle={{}}
        >
            <ImageLogo source={logo} width={10} />
        </Elements.Header>
    );
}
