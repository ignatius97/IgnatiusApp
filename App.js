import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
// import IndexStackContainer from './Stacks/IndexStack';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! ignatius  </Text>
      {/* <IndexStackContainer/> */}
      <StatusBar style="auto" />
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




