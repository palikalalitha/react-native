import React, {Component} from 'react';
import {
  Router,
  Reducer,
  Stack,
  Actions,
  Lightbox,
} from 'react-native-router-flux';
import {observer} from 'mobx-react';
import {NavigationActions} from 'react-navigation';

import scenes from '../scenes';
import {APP_LAUNCH_SCENE} from '../constants/NavigationConstants';

const reducerCreate = (params: any) => {
  const defaultReducer = new Reducer(params);
  return (state: any, action: any) => {
    if (__DEV__) {
      // console.log('state', state, action)
    }

    if (action.type === NavigationActions.BACK) {
      return handleBackPress(state, action, defaultReducer);
    }
    return defaultReducer(state, action);
  };
};

//NOTE: This function is used to navigate to particular scene
/*
const navigateToScene = (state, defaultReducer = null, navigationFun) => {
  if (defaultReducer === null) {
    navigationFun()
    return true
  }

  setTimeout(navigationFun, 0)
  return state
}
*/

/*
  Notes:
  1) We need to return boolean value if defaultReducer is null or function invoke is from hardware backpress
  2) We need to return state if defaultReducer is not null
  3) Here we are using setTimeOut(anyvalue) as we want it to be executed after returning the state, setTimeout will execute things once all statements excute
  */
const handleBackPress = (
  state: any,
  action: any = null,
  defaultReducer: any = null,
) => {
  if (state.routes[0].index === 0) {
    /**
      // Handle backpress custom usecases
      const { currentScene } = Actions
      if (currentScene !== APP_CLC_HOME_SCREEN) {
        // Check for all deep linking screens and write respective navigation screens
        return navigateToScene(state, defaultReducer, () => {
          goToClcHomeScreen({ type: ActionConst.RESET })
        })
      }
    **/

    if (defaultReducer === null) {
      return false;
    }
    return defaultReducer(state, action);
  }
  if (defaultReducer === null) {
    return null;
  }

  return defaultReducer(state, action);
};

class NavigationRouter extends Component {
  componentWillMount() {
    if (!Actions.currentScene && Actions.currentScene !== APP_LAUNCH_SCENE) {
      // Note: As react-native-router-flux not launching LaunchScreen as first screen if user exits app in some other scene, do something like splashscreen
      console.log('CurrentScene', Actions.currentScene);
    }
  }

  onBackPress = () => {
    // NOTE: DO NOT WRITE ANY console.log in this function
    const backPressValue = handleBackPress(Actions.state);
    // console.log('onBackPress CurrentScene', Actions)
    if (backPressValue !== null) {
      return backPressValue;
    }
    Actions.pop();
    return true;
  };

  render() {
    return (
      <Router
        createReducer={reducerCreate}
        backAndroidHandler={this.onBackPress}
        wrapBy={observer}>
        <Lightbox key="lightBox">
          <Stack key="InitialStack">{scenes}</Stack>
        </Lightbox>
      </Router>
    );
  }
}

export default NavigationRouter;
