import React, {Component} from 'react';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
// import {Alert} from 'react-native';

interface RadioButtonProps {
  list: Array<Object>;
  value: any;
  onPress: Function;
  labelStyle?: Object;
}
class RadioButtons extends Component<RadioButtonProps> {
  render() {
    return (
      <RadioForm formHorizontal={true} animation={true}>
        {/* To create radio buttons, loop through your array of options */}
        {this.props.list.map((obj, i) => (
          <RadioButton labelHorizontal={true} key={i}>
            {/*  You can set RadioButtonLabel before RadioButtonInput */}
            <RadioButtonInput
              obj={obj}
              index={i}
              isSelected={this.props.value === i}
              onPress={this.props.onPress}
              borderWidth={1}
              //   buttonInnerColor={'#e74c3c'}
              //   buttonOuterColor={this.props.value === i ? '#2196f3' : '#000'}
              buttonSize={10}
              buttonOuterSize={20}
              buttonStyle={{}}
              buttonWrapStyle={{marginLeft: 10}}
            />
            <RadioButtonLabel
              obj={obj}
              index={i}
              labelHorizontal={true}
              onPress={this.props.onPress}
              labelStyle={this.props.labelStyle}
              labelWrapStyle={{}}
            />
          </RadioButton>
        ))}
      </RadioForm>
    );
  }
}

export default RadioButtons;
