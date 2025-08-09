// components/UseStateExample.tsx
import { Button, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

const UseStateExample = () => {
  const [number, setNumber] = useState(0);

  const increase = () => {
    setNumber(prev => prev + 1);
  };

  const decrease = () => {
    setNumber(prev => {
      const newNumber = prev - 1;
      console.log('Decreased:', newNumber);
      return newNumber;
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>{number}</Text>
      <View style={styles.spacer} />
      <Button onPress={increase} title="Increase" />
      <View style={styles.spacer} />
      <Button onPress={decrease} title="Decrease" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    fontSize: 34,
    fontWeight: 'bold',
  },
  spacer: {
    height: 30,
  },
});

export default UseStateExample;