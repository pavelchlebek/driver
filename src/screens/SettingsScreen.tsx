import React from 'react'
import { View } from 'react-native'

import { TestComponent } from '../testCmp'

function SettingsScreen() {
  return (
    <View
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#444' }}
    >
      <TestComponent name="Settings Here!" />
    </View>
  )
}

export default SettingsScreen
