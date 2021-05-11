import React from 'react';

import { View } from 'react-native';

import { TestComponent } from '../testCmp';

function DeliveredScreen() {
  return (
    <View
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#444' }}
    >
      <TestComponent name="Delivered Orders Here!" />
    </View>
  )
}

export default DeliveredScreen
