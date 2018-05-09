import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { storiesOf } from '@storybook/react-native';
import { action } from  '@storybook/addon-actions';
import LoginForm from '../../src/containers/LoginForm';
import reducers from '../../src/store/reducers';


storiesOf('LoginForm', module)
  .addDecorator(story => <Provider store={createStore(reducers)}>{story()}</Provider>)
  .add('plain', () => (
    <LoginForm
      onPress={action('click')}
    >
    </LoginForm>
  ));
