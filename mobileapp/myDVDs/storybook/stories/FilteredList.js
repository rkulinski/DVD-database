import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { FilteredList } from '../../src/components';

const sampleList = [
  'Nowhere to run',
  'Universal soldier 1',
  'Universal soldier 2',
  'Universal soldier 3',
  'Blood Sport',
];

storiesOf('FilteredList', module)
  .add('Sample list', () => (
    <FilteredList
      itemsArray={sampleList}
    />
  ));
