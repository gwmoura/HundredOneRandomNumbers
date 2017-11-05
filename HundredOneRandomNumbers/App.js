import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import RandomNumber from './components/RandomNumbers/RandomNumber';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <RandomNumber />
        <Text>Power By George Moura</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
