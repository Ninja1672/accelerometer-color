import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Accelerometer } from 'expo-sensors';

export default function App() {
  const [data, setData] = React.useState({
    x: 0,
    y: 0,
    z: 0,
  });

  React.useEffect(() => {
    Accelerometer.addListener(setData)
      // Accelerometer.addListener(accelerometerData => {
      //   setData(accelerometerData);
      // })
  }, [])

  Number.prototype.clamp = function(min=0, max=255) {
    return Math.min(Math.max(this, min), max);
  }

  let { x, y, z } = data;
  const xString = x.toFixed(3)
  const yString = y.toFixed(3)
  const zString = z.toFixed(3)
    
  x += 1
  y += 1
  z += 1
  x = x.clamp(0, 2)
  y = y.clamp(0, 2)
  z = z.clamp(0, 2)

  let r = (x * 127.5)
  let g = (y * 127.5)
  let b = (z * 127.5)



  r = r.clamp()
  g = g.clamp()
  b = b.clamp()

  const containerStyle = {
    ...styles.container,
    backgroundColor: `rgb(${r},${g},${b})`
  }

  return (
    <View style={containerStyle}>
      <Text style={styles.text}>Accelerometer: (in Gs where 1 G = 9.81 m s^-2)</Text>
      <Text style={styles.text}>
        x: {xString} y: {yString} z: {zString}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7acade',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
