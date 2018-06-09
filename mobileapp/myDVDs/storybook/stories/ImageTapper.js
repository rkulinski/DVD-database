import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from  '@storybook/addon-actions';
import { ImageTapper } from '../../src/components';

import sampleImg from '../static/sample_photo.jpeg';

storiesOf('ImageTapper', module)
  .add('with image', () => (
    <ImageTapper
      title="Image Button"
      onPress={action('button-click')}
      imgSrc={sampleImg}
    >
    </ImageTapper>
  ))
  .add('with text', () => (
    <ImageTapper
      title="Text Button"
      onPress={action('button-click')}
    >
    </ImageTapper>
  ));
