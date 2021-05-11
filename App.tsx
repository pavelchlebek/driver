import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import GettingReadyScreen from "./src/screens/GettingReadyScreen";
import DeliveryScreen from "./src/screens/DeliveryScreen";
import LogoutScreen from "./src/screens/LogOutScreen";
import TakeOverScreen from "./src/screens/TakeOverScreen";

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "#fff",
          inactiveTintColor: "#ccc",
          activeBackgroundColor: "#111",
          inactiveBackgroundColor: "#111",
        }}
      >
        <Tab.Screen name="Připravované" component={GettingReadyScreen} />
        <Tab.Screen name="Převzít" component={TakeOverScreen} />
        <Tab.Screen name="Rozvoz" component={DeliveryScreen} />
        <Tab.Screen name="Odhlášení" component={LogoutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
  },
});
