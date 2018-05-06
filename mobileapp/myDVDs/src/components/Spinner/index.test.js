import React from 'react';
import { shallow } from 'enzyme';
import { Spinner } from './';


describe('Testing Header component', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <Spinner/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
