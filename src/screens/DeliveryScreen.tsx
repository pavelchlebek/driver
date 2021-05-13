import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type TProps = NoChildren

export const DeliveryScreen: React.FC<TProps> = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.heading}>Being Delivered!</Text>
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
  heading: {
    color: '#fff',
  },
})
