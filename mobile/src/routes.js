import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import BottomTabNavigator from './components/BottomTabNavigator';

export default function Routes() {
    return (
        <NavigationContainer>
            <BottomTabNavigator />
        </NavigationContainer>
    );
}
