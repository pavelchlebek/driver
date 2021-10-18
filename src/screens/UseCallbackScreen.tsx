import React, { useState } from 'react'
import { Button, Text, View, ViewStyle } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

type TProps = NoChildren

const List = ({ getItems }) => {
  const [items, setItems] = useState([])

  React.useEffect(() => {
    setItems(getItems)
    console.log('Updating items')
  }, [getItems])

  return items ? (
    <View>
      {items.map((item) => (
        <Text key={item}>{item}</Text>
      ))}
    </View>
  ) : null
}

export const UseCallbackScreen: React.FC<TProps> = () => {
  const [number, setNumber] = React.useState(1)
  const [dark, setDark] = React.useState(false)

  const getItems = React.useCallback(() => {
    return [number, number + 1, number + 2]
  }, [number, dark])

  const theme: ViewStyle = {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: dark ? '#333' : '#fff',
    color: dark ? '#fff' : '#333',
  }

  return (
    <View style={theme}>
      <TextInput
        value={number.toString()}
        style={{ backgroundColor: 'tomato', width: 100 }}
        onChangeText={(e) => setNumber(parseInt(e))}
      />
      <Button title="Toggle theme" onPress={() => setDark((prev) => !prev)} />
      <List getItems={getItems} />
    </View>
  )
}
