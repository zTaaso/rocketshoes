import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../../pages/Home';
import Cart from '../../pages/Cart';

import IconWithBadge from '../IconWithBadge';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#7159c1',
                activeBackgroundColor: '#191920',
                inactiveBackgroundColor: '#191920',
                style: {
                    borderTopColor: 'transparent',
                    elevation: 0,
                    borderTopWidth: 0,
                },
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = 'home';
                    } else {
                        iconName = 'shoppingcart';
                    }

                    return (
                        <IconWithBadge
                            name={iconName}
                            size={size}
                            color={color}
                            badgeCount={iconName === 'shoppingcart' ? 7 : null}
                        />
                    );
                },
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Cart" component={Cart} />
        </Tab.Navigator>
    );
}
