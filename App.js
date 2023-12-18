import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import JournalScreen from './screen/JournalScreen';
import DesiresScreen from './screen/DesiresScreen';
import RandomScreen from './screen/RandomScreen';

import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>

      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Journal') {
              iconName = focused ? 'book' : 'book-outline';
            } else if (route.name === 'Wishes') {
              iconName = focused ? 'heart' : 'heart-outline';
            } else if (route.name === 'Random') {
              iconName = focused ? 'shuffle' : 'shuffle-disabled';
            }

            // You can return any component that you like here!
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >

        <Stack.Screen name="Journal" component={JournalScreen} />
        <Stack.Screen name="Wishes" component={DesiresScreen} />
        <Stack.Screen name="Random" component={RandomScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
