import React, {Component, Fragment} from 'react';

import Practice from '../../components/Practice/Practice';
// import {LaunchScreenWrapper} from './styledComponents';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

class PracticeScene extends Component {
  render() {
    return (
      <Fragment>
        <Practice />
        {/* <LaunchScreenWrapper>

         
        </LaunchScreenWrapper> */}
      </Fragment>
    );
  }
}

export default PracticeScene;
