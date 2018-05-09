import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from  '@storybook/addon-actions';
import { ListControlBar } from '../../src/components';


storiesOf('List Control Bar', module)
  .add('with text', () => (
    <ListControlBar
    >
    </ListControlBar>
  ));
