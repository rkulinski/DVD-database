import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from  '@storybook/addon-actions';
import LoginForm from '../../src/containers/LoginForm';


storiesOf('LoginForm', module)
  .add('plain', () => (
    <LoginForm
      onPress={action('click')}
    >
    </LoginForm>
  ));
