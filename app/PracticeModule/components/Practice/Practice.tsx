import React, {Component} from 'react';
import {View, TextInput, Text} from 'react-native';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
// import TextInputElement from '../../../common/components/TextInputElement/TextInputElement';

@observer
class Practice extends Component {
  @observable value: string;
  @observable value1: string;
  constructor(props: any) {
    super(props);
    this.value = '';
    this.value1 = '';
  }
  onChangeText = (text: any) => {
    // Alert.alert('1');
    this.value = text;
  };
  onChangeText1 = (text: any) => {
    // Alert.alert('2');

    this.value1 = text;
  };

  render() {
    return (
      <View>
        <Text>Text input</Text>
        {/* <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 ,margin:70}}  onChangeText={text => onChangeText1(text)}  value={value1}  placeholder="type...."/> */}
        <TextInput
          textAlignVertical="bottom"
          style={{height: 40, borderColor: 'gray', borderWidth: 1, margin: 70}}
          onChangeText={this.onChangeText}
          value={this.value}
          placeholder="enter name"
          autoFocus
          editable={true}
          autoCompleteType={'name'}
          returnKeyType={'next'}
          // enablesReturnKeyAutomatically={true}
          //  inlineImageLeft='search_icon'
          // autoCapitalize="words"
          keyboardType="phone-pad"
          textContentType="password"
          // maxLength={6}
          // multiline={true}
          // numberOfLines={3}
          placeholderTextColor="red"
        />
        <TextInput
          secureTextEntry={true}
          value="abc"
          style={{height: 40, borderColor: 'gray', borderWidth: 1, margin: 70}}
          // value={this.value1}
          // onChangeText={this.onChangeText1}
          placeholder="type.."
          onChangeText={this.onChangeText1}
        />
        <Text>{this.value}</Text>
      </View>
    );
  }
}

export default Practice;
