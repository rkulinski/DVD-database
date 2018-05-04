import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StackNavigator } from 'react-navigation';
import reducers from './reducers';
import Tiles from './containers/TilesView';
import MoviesList from './containers/MoviesList';


const Navigator = StackNavigator({
  Tiles: { screen: Tiles },
  MoviesList: { screen: MoviesList },
});

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Navigator/>
      </Provider>
    );
  }
}
