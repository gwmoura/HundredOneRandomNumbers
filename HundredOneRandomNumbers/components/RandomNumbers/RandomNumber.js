import React from 'react';
import { Text, Button, View, StyleSheet } from 'react-native';

export default class RandomNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {number: 0};

    // Toggle the state every second
    setTimeout(() => {this.getNumber();}, 3000);
  }

  getNumber() {
    let number = Math.floor(Math.random() * 101);
    this.setState({number: number});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.numberText}>{this.state.number}</Text>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.getNumber()}
            title="Novo Número"
            color="#841584"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    fontSize: 40,
    paddingBottom: 20
  },
  buttonContainer: {
    margin: 20
  }
});
