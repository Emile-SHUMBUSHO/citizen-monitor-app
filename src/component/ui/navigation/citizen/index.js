import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, FontAwesome, AntDesign } from '@expo/vector-icons';
import  Home  from '../../../../screens/umuturage';
import Profile from '../../../../screens/profile';
import migrationHistory from '../../../../screens/history';
import MainNavigator from '../main';
import { useState } from 'react';

const Tab = createBottomTabNavigator();

function CitizenDashboard() {
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
        name="History"
        component={migrationHistory}
        options={{
          tabBarIcon: ({ color, size }) => <AntDesign name="areachart" size={24} color="black" />,
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

export default CitizenDashboard;