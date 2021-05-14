import React from 'react'
import { StyleSheet, View } from 'react-native'

import { PreparedItem } from '../components/PreparedItem'

type TProps = NoChildren

export const GettingReadyScreen: React.FC<TProps> = () => {
  return (
    <View style={styles.screen}>
      <PreparedItem order={54} restaurant="Pizza Time" />
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
