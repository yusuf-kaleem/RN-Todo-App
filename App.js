import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Todo_List from "../todo/src/screens/Todo_List";
import Auth from "./src/screens/Auth";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {

  const [is_device_authenticated, set_device_authenticated] = useState()
  const [is_user_authenticated, set_user_authenticated] = useState(false)



  return (
    <NavigationContainer>
      <Provider store={store}>
      <Stack.Navigator
       screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen
          name="Auth"
          component={Auth}
        />
        <Stack.Screen name="todoList" component={Todo_List} />
      </Stack.Navigator>
      </Provider>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
