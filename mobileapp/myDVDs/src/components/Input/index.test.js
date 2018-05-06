import React from 'react';
import { shallow } from 'enzyme';
import { Input } from './';


describe('Testing Input component', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <Input/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
