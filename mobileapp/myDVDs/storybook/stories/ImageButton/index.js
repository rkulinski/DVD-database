import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from  '@storybook/addon-actions';
import { ImageButton } from '../../../src/components';

storiesOf('ImageButton', module)
  .add('with text', () => (
    <ImageButton
      title="Story Button"
      onPress={action('button-click')}
    >
    </ImageButton>
  ));
