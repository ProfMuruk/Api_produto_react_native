import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../HomeScreen";
import { StatusBar } from "react-native";
import CreateProductScreen from "../CreateProductScreen";

const Stack = createNativeStackNavigator();

export default function Routes() {
    
  return (
    <NavigationContainer>
        <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CreateProduct" component={CreateProductScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
