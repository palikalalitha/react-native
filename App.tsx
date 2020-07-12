/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import NavigationRouter from './app/PracticeModule/navigation/NavigationRouter';
console.disableYellowBox = true;
const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.body}>
        <NavigationRouter />
      </SafeAreaView>
    </Fragment>
  );
};

//app styles

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});

export default App;
