import React from 'react';
import {Scene} from 'react-native-router-flux';

import {APP_LAUNCH_SCENE, APP_SCENE} from '../constants/NavigationConstants';

import LaunchScene from './LaunchScene';
import AppScene from './AppScene';
// import PracticeScene from './PracticeScene';
import SignUpScene from './SignUpScene';

const scenes = [
  <Scene key={APP_LAUNCH_SCENE} component={LaunchScene} />,

  <Scene key={APP_SCENE} component={AppScene} />,
  // <Scene initial key={APP_SCENE} component={PracticeScene} />,
  <Scene initial key={'signup'} component={SignUpScene} />,
];

const modalScenes: any = [];

export {scenes as default, modalScenes};
