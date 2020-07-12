import React, {Component} from 'react';

import SignUpForm from '../../components/SignUpForm/SignUpForm';
import {ScrollView, View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import TextElement from '../../../common/components/TextElement/TextElement';

class SignUpScene extends Component {
  render() {
    return (
      <ScrollView>
        <LinearGradient
          colors={['skyblue', '#9198e5']}
          start={{x: 0.8, y: 0.2}}
          end={{x: 0.9, y: 0.5}}
          style={styles.linearGradient}>
          <View style={styles.SignUpContainer}>
            <View style={styles.linearGradient}>
              <TextElement title="Select your favouvrite color" />
            </View>

            <SignUpForm />

            <View style={styles.alignCenter}>
              <TextElement
                styles={{color: 'white'}}
                title="Already have an account?"
              />

              <TextElement styles={styles.login} title={'Login here'} />
            </View>
          </View>
        </LinearGradient>
      </ScrollView>
    );
  }
}

export default SignUpScene;

const styles = StyleSheet.create({
  SignUpContainer: {
    flex: 1,
    padding: 20,
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
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
