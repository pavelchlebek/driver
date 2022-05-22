import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { PreparedItem } from '../components/PreparedItem';
import { preparedItems } from '../data/data';

type TProps = NoChildren

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222299',
    flex: 1,
  },
})

// FlatList better for performance than ScrollView - it renders only first couple items and then loads next as we scroll down
export const FlatListScreen: React.FC<TProps> = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <FlatList
          // keyExtractor={(item, index) => index.toString()}
          data={preparedItems}
          renderItem={({ item, index }) => (
            <PreparedItem
              key={index}
              address={item.address}
              amount={item.amount}
              customerName={item.customerName}
              order={item.order}
              restaurant={item.restaurant}
            />
          )}
        />
      </View>
    </SafeAreaView>
  )
}
