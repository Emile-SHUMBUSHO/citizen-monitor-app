import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, FontAwesome, Ionicons } from '@expo/vector-icons';
import Home from './home';
import Profile from './settings';
import SearchForCitizen from './search';
import MainNavigator from '../main';
const Tab = createBottomTabNavigator();

function  LeaderDashboard() {
  return (
    <MainNavigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => <FontAwesome5 name="home" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchForCitizen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="ios-search-circle-sharp" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => <FontAwesome name="user-circle" size={24} color="black" />,
        }}
      />
    </MainNavigator>
  );
}

export default LeaderDashboard;
