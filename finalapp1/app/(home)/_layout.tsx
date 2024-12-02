import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button } from '@react-navigation/elements';
import HomeScreen from '.';
import MessagesScreen from './browse';
import DetailsScreen from '../(pages)/aboutus';
import LightUser from '../(pages)/OcassionalUser';
import MediumUser from '../(pages)/CausalUser';
import HeavyUser from '../(pages)/RegularUser';
import OcassionalUser from '../(pages)/OcassionalUser';
import CausalUser from '../(pages)/CausalUser';
import RegularUser from '../(pages)/RegularUser';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Me from './cart_tab';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home"  options={{
          title: 'Home',
          
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={30} color="black" />
          ),
        }}
 component={HomeScreen} />
      <Tab.Screen name="Browse" options={{
          title: 'Browse',
          
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="search-web" size={30} color="black" />
          ),
        }}
        component={MessagesScreen} />


<Tab.Screen name="Glow Guide"  options={{
          title: 'Glow Guide',
          
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book-open" size={30} color="black" />
          ),
        }}
        
 component={Me} />

    </Tab.Navigator>
  );
}

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="About Us" component={DetailsScreen} />
      <Stack.Screen name="For Causal Users" component={CausalUser} />
      <Stack.Screen name="For Regular Users" component={RegularUser} />
      <Stack.Screen name="For Ocassional Users" component={OcassionalUser} />



    </Stack.Navigator>
  );
}

export default function App() {
  return (
      <RootStack />
  );
}
