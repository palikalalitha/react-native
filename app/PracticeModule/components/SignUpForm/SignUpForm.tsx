import React, {useState} from 'react';
import RadioForm from 'react-native-simple-radio-button';

// import {
//   // ColorPicker,
//   // TriangleColorPicker,
//   // toHsv,
// } from 'react-native-color-picker';
import DatePicker from 'react-native-datepicker';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Picker,
  CheckBox,
  Slider,
  Alert,
} from 'react-native';
import {FormFields} from './styledComponents';
import TextElement from '../../../common/components/TextElement/TextElement';
import TextInputElement from '../../../common/components/TextInputElement/TextInputElement';
// import RadioButtons from '../../../common/components/RadioButton/RadioButton';

const gender = [
  {label: 'Male', value: 0},
  {label: 'FeMale', value: 1},
  {label: 'other', value: 2},
];
const SignUpForm = () => {
  const [selectedValue, setSelectedValue] = useState('java');
  const [isSelected, setSelection] = useState(false);
  // const [radioButtonValue, onPressRadioButton] = useState(-1);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  // const [color, setColor] = useState(toHsv('green'));
  return (
    <FormFields>
      <TextElement styles={styles.title} title="Sign up" />
      <TextElement
        styles={styles.text}
        title="Please fill in this form to create an account"
      />

      <View style={styles.inputContainer}>
        <TextInputElement
          type="textbox"
          styles={styles.inputElements}
          placeholder="First Name"
          value={firstName}
          setText={setFirstName}
        />
        <TextInputElement
          type="textbox"
          styles={styles.inputElements}
          placeholder="Last Name"
          value={lastName}
          setText={setLastName}
        />
      </View>

      <TextInputElement
        type="textbox"
        styles={styles.inputElements}
        placeholder="Mobile number"
        value={mobileNumber}
        setText={setMobileNumber}
      />
      <TextInputElement
        type="email"
        styles={styles.inputElements}
        placeholder="Email"
        value={email}
        setText={setEmail}
      />
      <TextInputElement
        type="password"
        styles={styles.inputElements}
        placeholder="Password"
        value={password}
        setText={setPassword}
      />
      <TextInputElement
        type="password"
        styles={styles.inputElements}
        placeholder="Confirm Password"
        value={password}
        setText={setPassword}
      />

      <View style={styles.Wrapper}>
        <Text style={styles.text}>Select your gender</Text>
        {/* <RadioButtons
          list={gender}
          value={radioButtonValue}
          onPress={onPressRadioButton}
          labelStyle={styles.text}
        /> */}
        <RadioForm
          radio_props={gender}
          initial={0} // you can set as per requirement, initial i set here 0 for male
          // initial={-1} // you can set as per requirement, initial i set here 0 for male
          onPress={(value: any) => Alert.alert(value)}
          buttonSize={10} // size of radiobutton
          buttonOuterSize={20}
          // formHorizontal={true}
          // selectedButtonColor={'green'}
          // selectedLabelColor={'green'}
          labelStyle={styles.text}
        />
      </View>

      <View style={styles.Wrapper}>
        <TextElement styles={styles.text} title="Select your branch" />
        <Picker
          selectedValue={selectedValue}
          style={styles.selectBranch}
          onValueChange={itemValue => setSelectedValue(itemValue)}>
          <Picker.Item label="React" value="React" />
          <Picker.Item label="HTML" value="HTML" />
          <Picker.Item label="React-native" value="React-native" />
        </Picker>
      </View>

      <View style={styles.Wrapper}>
        <Text style={styles.text}>DOB</Text>
        <DatePicker
          minDate="2016-05-01"
          maxDate="2023-05-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          date={new Date()}
        />
      </View>

      <View style={styles.Wrapper}>
        <Text style={styles.text}>Enter your address</Text>
        <TextInput
          style={{borderWidth: 1}}
          multiline={true}
          // numberOfLines={3}
          placeholder="Type your address here"
        />
      </View>

      <View style={styles.Wrapper}>
        <Text style={styles.text}>Set your typing speed</Text>
        <Slider
          step={1}
          style={styles.slider}
          maximumValue={100}
          // onValueChange={this.change.bind(this)}
          value={50}
        />
      </View>

      <View style={styles.elementsWrapper}>
        <CheckBox value={isSelected} onValueChange={setSelection} disabled />
        <Text style={styles.accept}>
          I accept the
          <Text style={styles.terms}> Terms of Use</Text>
          <Text>and Privacy Policy</Text>
        </Text>
      </View>

      <View style={[styles.elementsWrapper, {justifyContent: 'center'}]}>
        <Button title="Sign Up" onPress={() => {}} />
      </View>
    </FormFields>
  );
};

export default SignUpForm;

const styles = StyleSheet.create({
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  elementsWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  inputElements: {
    backgroundColor: '#f2f2f2',
    paddingRight: 80,
    margin: 5,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: '#888888',
    margin: 5,
  },
  accept: {color: '#888888', margin: 5, fontSize: 12},
  terms: {
    color: 'blue',
    fontSize: 14,
  },
  selectBranch: {
    width: 150,
    color: '#888888',
    height: 40,
    borderColor: 'black',
    borderWidth: 2,
    borderStyle: 'solid',
  },
  Wrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: 2,
  },
  slider: {width: 180},
  alignCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  login: {
    borderBottomWidth: 1,
    color: 'white',
  },
});
