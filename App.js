import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import JournalScreen from './screen/JournalScreen';
import DesiresScreen from './screen/DesiresScreen';
import RandomScreen from './screen/RandomScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Journal">
        <Stack.Screen name="Journal" component={JournalScreen} />
        <Stack.Screen name="Desires" component={DesiresScreen} />
        <Stack.Screen name="Random" component={RandomScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
