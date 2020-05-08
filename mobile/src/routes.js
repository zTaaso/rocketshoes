import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";

import Home from "./components/Home";
import Cart from "./components/Cart";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "#7159c1",
          activeBackgroundColor: "#bbb",
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = "home";
            } else {
              iconName = "shoppingcart";
            }

            return (
              <AntDesign name={iconName} size={size} color={color}></AntDesign>
            );
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Cart" component={Cart} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
