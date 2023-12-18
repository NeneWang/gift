import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import JournalScreen from './screen/JournalScreen';
import DesiresScreen from './screen/DesiresScreen';
import RandomScreen from './screen/RandomScreen';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>

      <Tab.Navigator>

        <Stack.Screen name="Journal" component={JournalScreen} />
        <Stack.Screen name="Desires" component={DesiresScreen} />
        <Stack.Screen name="Random" component={RandomScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
