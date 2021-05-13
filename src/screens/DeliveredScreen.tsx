import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type TProps = NoChildren

export const DeliveredScreen: React.FC<TProps> = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.heading}>Delivered so far</Text>
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
