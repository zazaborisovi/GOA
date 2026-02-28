import { Button, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [count , setCount] = useState(0)
  return (
    <View style={styles.container}> {/* creates view component to hold all other components*/}
      <Text style={{ fontSize: 50, color: count >= 0 ? 'green' : 'red' }}>{count}</Text> {/* creates text component to render count variable */}
      <View style={{ flexDirection: "row", gap: 20}}> {/* creates view component so we can style buttons in row direction */}
        <Button title='-1' onPress={(e) => {
          e.preventDefault()
          setCount(count - 1)
        }} />
        <Button title='+1' onPress={(e) => {
          e.preventDefault()
          setCount(count + 1)
        }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
