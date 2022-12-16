import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import MessageScreen from './MessageScreen';
  
const Stack = createNativeStackNavigator();
  
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerTintColor: '#fff',
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Message" component={MessageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}