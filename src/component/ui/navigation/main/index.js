import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

function MainNavigator(props) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        headerShown: false,
        activeTintColor: "#000000", // color of the active tab
        inactiveTintColor: "gray", // color of the inactive tabs
        activeBackgroundColor: "#d9d9d9", // background color of the active tab
        inactiveBackgroundColor: "white", // background color of the inactive tabs
        labelStyle: {
          fontWeight: "bold", // font weight of the tab labels
        },
      }}
      screenOptions={{
        headerShown: false,
      }}
    >
      {props.children}
    </Tab.Navigator>
  );
}

export default MainNavigator;
