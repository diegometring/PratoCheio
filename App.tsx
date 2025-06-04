import React from "react";
import {} from "react-native";
import Login from "./app/src/Login";
import CreateUser from "./app/src/createUser";
import telaInicial from "./app/src/telaInicial"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen 
          name="login" 
          component={Login} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="CreateUser" 
          component={CreateUser} 
          options={{ 
            title: "",
            headerTintColor: "#FFF",
            headerTransparent: true 
          }}
        />
        <Stack.Screen 
          name="telaInicial" 
          component={telaInicial} 
          options={{ 
            title: "",
            headerTintColor: "#FFF",
            headerTransparent: true 
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
