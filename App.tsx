import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { GuessNumber } from './components/GuessNumber';

export default function App() {
  return (
    <View style={styles.container}>
      <GuessNumber></GuessNumber>
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
