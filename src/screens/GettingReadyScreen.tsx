import React from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { PreparedItem } from '../components/PreparedItem';
import { preparedItems } from '../data/data';

type TProps = NoChildren

export const GettingReadyScreen: React.FC<TProps> = () => {
  return (
    <ScrollView style={styles.screen}>
      {preparedItems.map((item, index) => {
        return (
          <PreparedItem
            address={item.address}
            customerName={item.customerName}
            amount={item.amount}
            order={item.order}
            restaurant={item.restaurant}
            key={index}
          />
        )
      })}
    </ScrollView>
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
