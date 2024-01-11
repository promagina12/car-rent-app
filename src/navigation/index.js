import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Onboarding from "../Onboarding";
import Home from "../Home";
import Details from "../Details";

const MainStack = createStackNavigator();

const Navigation = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name="Details"
        component={Details}
        options={{
          headerShown: false,
        }}
      />
    </MainStack.Navigator>
  );
};

export default Navigation;
