import React from 'react';
import { ImageTapper } from './';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<ImageTapper />).toJSON();
  expect(tree).toMatchSnapshot();
});
