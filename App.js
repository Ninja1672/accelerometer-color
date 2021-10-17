import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Accelerometer } from 'expo-sensors';
// import Gyroscope and change every instance of Accelerometer to Gyroscope
// it will do the same functions but based off of Gyroscope data instead
// This is like main in most programs
export default function App() {
  // This is how the data will come in from the accelerometer
  const [data, setData] = React.useState({
    x: 0,
    y: 0,
    z: 0,
  });
  
  // Adding listener to track Accelerometer data
  React.useEffect(() => {
    Accelerometer.addListener(setData)
      // This is a slightly more verbose way to write whats above
      // Accelerometer.addListener(AccelerometerData => {
      //   setData(AccelerometerData);
      // })
  }, [])

  // A helpful clamp to ensure our numbers stay within bounds
  Number.prototype.clamp = function(min=0, max=255) {
    return Math.min(Math.max(this, min), max);
  }


  let { x, y, z } = data;
  const xString = x.toFixed(3)
  const yString = y.toFixed(3)
  const zString = z.toFixed(3)
  
  // Data comes in from roughly -1 to 1 we are adding one so we keep things positive
  x += 1
  y += 1
  z += 1
  // Clamp for good measure, anything over a 2 probably means you were throwing your phone or shaking it hard
  x = x.clamp(0, 2)
  y = y.clamp(0, 2)
  z = z.clamp(0, 2)

  // Using math to convert our Accelerometer data into RGB data for the background
  let r = (x * 127.5)
  let g = (y * 127.5)
  let b = (z * 127.5)


  // Extra clamp, could possibly be left out
  r = r.clamp()
  g = g.clamp()
  b = b.clamp()

  // Overwrite the styles sheet and set our background to our new rgb
  const containerStyle = {
    ...styles.container,
    backgroundColor: `rgb(${r},${g},${b})`
  }

  // Everything past return is what will be constantly updated
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

// A Style Sheet similar to CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7acade',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
