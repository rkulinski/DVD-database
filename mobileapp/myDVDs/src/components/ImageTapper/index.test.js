import React from 'react';
import { ImageTapper } from './';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<ImageTapper title="title" />).toJSON();
  expect(tree).toMatchSnapshot();
});
