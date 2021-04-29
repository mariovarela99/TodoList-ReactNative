import "react-native-gesture-handler";
import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TodoList from "../pages/TodoList";
import Details from "../pages/Details";

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={TodoList}></Stack.Screen>
        <Stack.Screen
          name="Todos"
          component={() => <h1> Todos Page </h1>}
        ></Stack.Screen>
        <Stack.Screen name="details" component={Details}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
