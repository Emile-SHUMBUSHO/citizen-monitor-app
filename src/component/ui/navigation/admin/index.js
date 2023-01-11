import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import Settings from "./settings";
import MainNavigator from "../main";
import Home from "./home";

const Tab = createBottomTabNavigator();

function AdminDashboard() {
  return (
    <MainNavigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={24} color="black" />
          ),
        }}
      />
    </MainNavigator>
  );
}

export default AdminDashboard;
