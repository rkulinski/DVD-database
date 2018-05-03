import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from  '@storybook/addon-actions';
import { ImageTapper } from '../../../src/components';

storiesOf('ImageTapper', module)
  .add('with text', () => (
    <ImageTapper
      title="Story Button"
      onPress={action('button-click')}
    >
    </ImageTapper>
  ));
