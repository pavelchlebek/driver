import React from 'react'
import { View } from 'react-native'

import { TestComponent } from '../testCmp'

function GettingReadyScreen() {
  return (
    <View
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#444' }}
    >
      <TestComponent name="Getting ready orders" />
    </View>
  )
}

export default GettingReadyScreen
