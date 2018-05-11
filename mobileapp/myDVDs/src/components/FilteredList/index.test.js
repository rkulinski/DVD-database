import React from 'react';
import { shallow } from 'enzyme';
import { FilteredList } from './';


describe('Testing FilteredList component', () => {
  describe('Default props', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<FilteredList/>);
    });
    it('renders as expected', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
  describe('With provided list', () => {
    const renderItemFn = jest.fn();
    const props = {
      itemsArray: [
        'abc',
        'def',
        'ghi',
      ],
      renderItem: renderItemFn,
    };

    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<FilteredList {...props}/>);
    });

    it('renders FlatList', () => {
      expect(wrapper.find('FlatList').length).toEqual(1);
    });
    it('renders all items', () => {
      expect(wrapper.find('FlatList').at(0).prop('data').length).toEqual(props.itemsArray.length);
    });
    it('filters based on input', () => {
      wrapper.instance().updateList('ab');
      expect(wrapper.state('searchTerm')).toEqual('ab');
      expect(wrapper.state('filteredList')).toEqual(['abc']);
    });
    it('should have empty list when nothing mathing', () => {
      wrapper.instance().updateList('qweqwe');
      expect(wrapper.state('filteredList')).toEqual([]);
    });
  });
});
