import React from 'react'
import { StyleSheet, View } from 'react-native'

import { PreparedItem } from '../components/PreparedItem'
import { preparedItems } from '../data/data'

type TProps = NoChildren

export const GettingReadyScreen: React.FC<TProps> = () => {
  return (
    <View style={styles.screen}>
      {preparedItems.map((item) => {
        return (
          <PreparedItem
            address={item.address}
            customerName={item.customerName}
            amount={item.amount}
            order={item.order}
            restaurant={item.restaurant}
            key={item.order}
          />
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#303030',
    marginTop: 30,
    paddingTop: 20,
  },
})
