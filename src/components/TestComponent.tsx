import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

type TProps = {
  name: string
}

export const TestComponent: React.FC<TProps> = ({ name }) => {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked)
  }

  const attatchedStyles = clicked ? { ...styles.text, ...styles.clicked } : styles.text

  return (
    <TouchableOpacity style={styles.wrapper} onPress={handleClick}>
      <Text style={attatchedStyles}>{name}</Text>
    </TouchableOpacity>
  )
}

// type TMyStyles = Pick<TextStyle, 'fontWeight' | 'color' | 'padding'>
// type TMyStyles = Omit<TextStyle, 'fontWeight' | 'color' | 'padding'>

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#cc2255',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  text: {
    color: '#ffffff',
    padding: 6,
    fontWeight: '100',
  },
  clicked: {
    padding: 16,
  },
})
