import 'react-native-gesture-handler';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';

import { DatePicker } from './src/screens/DatePicker';
import { FlatListScreen } from './src/screens/FlatListScreen';
import { GettingReadyScreen } from './src/screens/GettingReadyScreen';
import { QRScan } from './src/screens/QRScan';
import { TakeOverScreen } from './src/screens/TakeOverScreen';
import { UseCallbackScreen } from './src/screens/UseCallbackScreen';

export default function App() {
  const Tab = createBottomTabNavigator()

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#fff',
          inactiveTintColor: '#aaa',
          activeBackgroundColor: '#111',
          inactiveBackgroundColor: '#333',
        }}
      >
        <Tab.Screen name="Připravované" component={GettingReadyScreen} />
        <Tab.Screen name="Převzít" component={TakeOverScreen} />
        <Tab.Screen name="Rozvoz" component={QRScan} />
        <Tab.Screen name="Odhlášení" component={DatePicker} />
        <Tab.Screen name="useCallback" component={UseCallbackScreen} />
        <Tab.Screen name="flatList" component={FlatListScreen} />
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
