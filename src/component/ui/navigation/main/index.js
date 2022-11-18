import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

function MainNavigator(props) {
  return (
    <Tab.Navigator
      style={{ paddingVertical: 20 }}
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: 'grey',
        tabBarActiveTintColor: 'light-grey',
        tabBarActiveBackgroundColor: 'white',
        tabBarInactiveBackgroundColor: 'white',
        tabBarStyle: [{ display: 'flex' }, null],
      }}>
     {props.children}
    </Tab.Navigator>
  );
}

export default MainNavigator;
