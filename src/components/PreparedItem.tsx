import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type TProps = NoChildren & {
  order: number
  restaurant: string
  address: string
  customerName: string
  amount: number
}

export const PreparedItem: React.FC<TProps> = ({
  order,
  restaurant,
  address,
  customerName,
  amount,
}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.order}>
        <Text style={styles.number}>{order}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.restaurant}>{restaurant}</Text>
        <Text style={styles.address}>{address}</Text>
        <Text style={styles.name}>{customerName}</Text>
        <Text style={styles.amount}>{`${amount} Kč`}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    borderColor: '#090',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  order: {
    flexDirection: 'column',
    backgroundColor: '#fe8124',
    borderRadius: 25,
    marginLeft: 10,
    marginRight: 20,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    color: 'white',
  },
  content: {
    width: '75%',
    backgroundColor: 'transparent',
    borderBottomColor: '#8d8d8d',
    borderBottomWidth: 1,
  },
  restaurant: {
    color: '#c77062',
  },
  address: {
    color: '#fff',
    fontSize: 16,
  },
  name: {
    color: '#9f9f9f',
  },
  amount: {
    color: '#9f9f9f',
    marginBottom: 10,
  },
})
