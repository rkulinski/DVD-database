import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { AddMovieViewNotConnected } from '../../src/containers/AddMovie';

storiesOf('AddMovieView', module)
  .add('Sample list', () => (
    <AddMovieViewNotConnected/>
  ));
