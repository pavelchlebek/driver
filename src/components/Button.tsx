import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

type TProps = NoChildren & {
  color?: string
  title: string
  onPress: AnyFunction
}

export const Button: React.FC<TProps> = ({ color, title, onPress }) => {
  let buttonStyle = styles.button
  switch (color) {
    case 'success':
      buttonStyle = { ...styles.button, ...styles.success }
      break
    case 'danger':
      buttonStyle = { ...styles.button, ...styles.danger }
  }

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: '94%',
    marginBottom: 10,
    borderRadius: 4,
    backgroundColor: '#a0a0a0',
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    textTransform: 'uppercase',
    padding: 10,
    fontSize: 20,
  },
  danger: {
    backgroundColor: '#fe1c1d',
  },
  success: {
    backgroundColor: '#179b12',
  },
})
