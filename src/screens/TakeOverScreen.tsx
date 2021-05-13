import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Button } from '../components/Button'

type TProps = NoChildren

export const TakeOverScreen: React.FC<TProps> = () => {
  const handlePress: AnyFunction = (buttonName: string) => {
    console.log(`Button ${buttonName} pressed!`)
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.heading}>Orders for takeover!</Text>
      <Button title="hotovo" color="success" onPress={handlePress.bind(null, 'hotovo')} />
      <Button title="odhlásit" color="danger" onPress={handlePress.bind(null, 'odhlásit')} />
      <View style={styles.buttonGroup}>
        <View style={styles.btn}>
          <Button title="zavolat" onPress={handlePress.bind(null, 'zavolat')} />
        </View>
        <View style={styles.btn}>
          <Button title="sms" onPress={handlePress.bind(null, 'sms')} />
        </View>
      </View>
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
  buttonGroup: {
    flexDirection: 'row',
    // borderWidth: 1,
    // borderColor: 'white',
  },
  btn: {
    // borderWidth: 1,
    // borderColor: 'blue',
    flex: 1,
  },
})
