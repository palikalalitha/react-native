import React, {Component} from 'react';
import {TextInput} from 'react-native';

interface TextInputElementProps {
  placeholder: string;
  styles: Object;
  setText: Function;
  value: string;
  type: string;
}

class TextInputElement extends Component<TextInputElementProps> {
  changeText = (text: any) => {
    this.props.setText(text);
  };
  render() {
    return (
      <TextInput
        // autoFocus
        style={this.props.styles}
        placeholder={this.props.placeholder}
        // onChangeText={changeText}
        defaultValue={this.props.value}
      />
    );
    // switch (props.type) {
    //   case 'textbox':
    //     return (
    //       <TextInput
    //         autoFocus
    //         style={props.styles}
    //         placeholder={props.placeholder}
    //         // onChangeText={changeText}
    //         defaultValue={props.value}
    //       />
    //     );
    //   case 'password':
    //     return (
    //       <TextInput
    //         autoFocus
    //         style={props.styles}
    //         placeholder={props.placeholder}
    //         // onChangeText={changeText}
    //         defaultValue={props.value}
    //         secureTextEntry={true}
    //       />
    //     );
    //   default:
    //     Alert.alert('Type not found');
    // }
  }
}

//const TextInputElement = (props: TextInputElementProps) => {

// switch (props.type) {
//   case 'textbox':
//     return (
//       <TextInput
//         autoFocus
//         style={props.styles}
//         placeholder={props.placeholder}
//         // onChangeText={changeText}
//         defaultValue={props.value}
//       />
//     );
//   case 'password':
//     return (
//       <TextInput
//         autoFocus
//         style={props.styles}
//         placeholder={props.placeholder}
//         // onChangeText={changeText}
//         defaultValue={props.value}
//         secureTextEntry={true}
//       />
//     );
//   default:
//     Alert.alert('Type not found');
// }
//};

export default TextInputElement;
