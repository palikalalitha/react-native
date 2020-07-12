import React from 'react';
import {render} from 'react-native-testing-library';

import Counter from './index';

describe('Counter component', () => {
  it('should find a button with text "ADD"', () => {
    const {getByText} = render(<Counter />);
    const button = getByText('ADD');
    expect(button).toBeDefined();
  });
});
