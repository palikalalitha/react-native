import React, {Component} from 'react';
import {Alert, Button} from 'react-native';

class Counter extends Component {
  onPress = () => {
    Alert.alert('Button with adjusted color pressed');
  };

  render() {
    return <Button title="ADD" color="#f194ff" onPress={this.onPress} />;
  }
}

export default Counter;
