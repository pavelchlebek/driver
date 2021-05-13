import 'react-native-gesture-handler'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet } from 'react-native'

import DeliveryScreen from './src/screens/DeliveryScreen'
import GettingReadyScreen from './src/screens/GettingReadyScreen'
import LogoutScreen from './src/screens/LogOutScreen'
import TakeOverScreen from './src/screens/TakeOverScreen'

export default function App() {
  const Tab = createBottomTabNavigator()

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#fff',
          inactiveTintColor: '#aaa',
          activeBackgroundColor: '#111',
          inactiveBackgroundColor: '#111',
        }}
      >
        <Tab.Screen name="Připravované" component={GettingReadyScreen} />
        <Tab.Screen name="Převzít" component={TakeOverScreen} />
        <Tab.Screen name="Rozvoz" component={DeliveryScreen} />
        <Tab.Screen name="Odhlášení" component={LogoutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
