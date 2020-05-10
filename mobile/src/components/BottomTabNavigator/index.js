import React from 'react';
import { connect } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../../pages/Home';
import Cart from '../../pages/Cart';

import IconWithBadge from '../IconWithBadge';

const Tab = createBottomTabNavigator();

function BottomTabNavigator({ cartSize }) {
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
                            badgeCount={
                                iconName === 'shoppingcart' ? cartSize : null
                            }
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

const mapStateToProps = (state) => ({
    cartSize: state.cart.length,
});

export default connect(mapStateToProps)(BottomTabNavigator);
