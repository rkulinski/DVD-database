import React from 'react';
import { shallow } from 'enzyme';
import { ItemList } from './';


describe('Testing Header component', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <ItemList/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
