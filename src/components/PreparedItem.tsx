import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type TProps = NoChildren & {
  order: number
  restaurant: string
}

export const PreparedItem: React.FC<TProps> = ({ order, restaurant }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.order}>
        <Text>{order}</Text>
      </View>
      <View style={styles.content}>
        <Text>{restaurant}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    borderColor: '#090',
    flexDirection: 'row',
  },
  order: {
    flex: 1,
    backgroundColor: 'orange',
  },
  content: {
    flex: 4,
    backgroundColor: '#5555aa',
  },
})
