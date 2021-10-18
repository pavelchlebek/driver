import { BarCodeScanner } from 'expo-barcode-scanner'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Button, Dimensions, StyleSheet, Text, View } from 'react-native'

type TProps = NoChildren

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  text: {
    color: '#fff',
  },
  barCodeBox: {
    backgroundColor: 'tomato',
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    height: 600,
    width: 400,
    // overflow: 'hidden',
    // borderRadius: 35,
  },
  mainText: {
    fontSize: 26,
    margin: 20,
    color: '#fff',
  },
})

export const QRScan: React.FC<TProps> = () => {
  const [hasPermission, setHasPermission] = React.useState<boolean | null>(null)
  const [scanned, setScanned] = React.useState(false)
  const [text, setText] = React.useState('Not yet scanned!')

  const askForCameraPermission = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync()
    setHasPermission(status === 'granted')
  }

  // request camera permission
  React.useEffect(() => {
    askForCameraPermission()
  }, [])

  type TOptions = {
    type: string
    data: string
  }

  // what happens when we scan the barcode
  const handleBarCodeScanned = ({ type, data }: TOptions) => {
    setScanned(true)
    setText(data)
    console.log(`Type: ${type} \n Data: ${data}`)
  }

  // check permission and return screen
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Requesting for camera permission!</Text>
        <StatusBar style="auto" />
      </View>
    )
  }

  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera!</Text>
        <StatusBar style="auto" />
        <Button title="Allow Camera" onPress={() => askForCameraPermission} />
      </View>
    )
  }

  // return the view
  return (
    <View style={styles.container}>
      {/* <View style={styles.barCodeBox}> */}
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={{ width: Dimensions.get('screen').width, height: 630 }}
      />
      {/* </View> */}
      <Text style={styles.mainText}>{text}</Text>
      {scanned && <Button title="Scan Again" onPress={() => setScanned(false)} color="tomato" />}
    </View>
  )
}
