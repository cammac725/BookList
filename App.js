import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native'

import colors from './config/colors'

import HomeScreen from './src/screens/Home';

export default function App() {
  return (
    <NavigationContainer>
      <HomeScreen />
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
  
// });
