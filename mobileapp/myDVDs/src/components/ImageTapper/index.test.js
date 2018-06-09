import React from 'react';
import { shallow } from 'enzyme';
import { ImageTapper } from './';


describe('Testing Header component', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <ImageTapper title="title" />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
