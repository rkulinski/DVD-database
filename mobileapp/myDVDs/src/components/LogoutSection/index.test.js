import React from 'react';
import { shallow } from 'enzyme';
import { LogoutSection } from './';


describe('Testing LogoutSection component', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <LogoutSection onLogout={jest.fn()}/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
