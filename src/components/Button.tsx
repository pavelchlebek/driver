import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

type TColor = `success` | `danger`

type TButtonProps = Pick<PropsOf<typeof TouchableOpacity>, 'onPress'>

type TProps = NoChildren &
  TButtonProps & {
    color?: TColor
    title: string
    // getColorLabel: (color: TColor) => string
    // getColorLabel2: PropsOf<typeof TouchableOpacity>['onLayout']
  }

export const Button: React.FC<TProps> = ({
  color,
  title,
  // getColorLabel,
  // getColorLabel2,
  children,
  ...buttonProps
}) => {
  // let buttonStyle = styles.button

  // switch (color) {
  //   case 'success':
  //     buttonStyle = { ...styles.button, ...styles.success }
  //     break
  //   case 'danger':
  //     buttonStyle = { ...styles.button, ...styles.danger }
  // }

  // const label = getColorLabel(color ?? `success`)

  const getButtonStyles = () => {
    switch (color) {
      case `success`:
        return { ...styles.button, ...styles.success }
      case `danger`:
        return { ...styles.button, ...styles.danger }
      default:
        return styles.button
    }
  }

  return (
    // <TouchableOpacity {...buttonProps} style={getButtonStyles()} onLayout={getColorLabel2}>
    <TouchableOpacity {...buttonProps} style={getButtonStyles()}>
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
