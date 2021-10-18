import DateTimePicker from '@react-native-community/datetimepicker'
import React, { useState } from 'react'
import { Button, Dimensions, Text, View } from 'react-native'

export const DatePicker = () => {
  type AndroidMode = 'date' | 'time'

  const [date, setDate] = useState(new Date())
  const [mode, setMode] = useState<AndroidMode>('date')
  const [show, setShow] = useState(false)

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date
    setShow(false)
    setDate(currentDate)
  }

  const showMode = (currentMode: AndroidMode) => {
    setShow(true)
    setMode(currentMode)
  }

  const showDatePicker = () => {
    showMode('date')
  }

  const showTimePicker = () => {
    showMode('time')
  }

  return (
    <View
      style={{
        height: Dimensions.get('screen').height / 2,
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
    >
      <View>
        <Button onPress={showDatePicker} title="Show date picker!" />
      </View>
      <View>
        <Button onPress={showTimePicker} title="Show time picker!" />
      </View>
      <Text style={{ marginTop: 26, fontSize: 22 }}>{date.toUTCString()}</Text>
      {show && (
        <DateTimePicker
          // testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  )
}
