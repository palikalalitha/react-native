import React, {Component} from 'react';
import {Text} from 'react-native';

interface TextElementProps {
  title: string;
  styles?: Object;
}
class TextElement extends Component<TextElementProps> {
  render() {
    return <Text style={this.props.styles}>{this.props.title}</Text>;
  }
}

export default TextElement;
