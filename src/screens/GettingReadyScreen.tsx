import React from 'react'
import { StyleSheet, View } from 'react-native'

import { TestComponent } from '../components/TestComponent'

type TProps = NoChildren

export const GettingReadyScreen: React.FC<TProps> = () => {
  return (
    <View style={styles.screen}>
      <TestComponent name="Getting ready orders" />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#444',
  },
})
