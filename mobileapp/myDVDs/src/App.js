import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import Tiles from './containers/TilesView';

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Tiles/>
      </Provider>
    );
  }
}
