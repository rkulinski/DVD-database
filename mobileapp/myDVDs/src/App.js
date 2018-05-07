import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StackNavigator } from 'react-navigation';
import reducers from './reducers';
import Tiles from './containers/TilesView';
import MoviesList from './containers/MoviesList';
import LoginForm from './containers/LoginForm';
import LoadingView from './containers/LoadingView';


const store = createStore(reducers);

const Navigator = StackNavigator({
  LoadingView: {
    screen: LoadingView,
    navigationOptions: {
      header: null,
    },
  },
  LoginForm: {
    screen: LoginForm,
    navigationOptions: {
      header: null,
    }},
  Tiles: {
    screen: Tiles,
    navigationOptions: {
      title: 'Actors',
      headerLeft: null,
    }
  },
  MoviesList: {
    screen: MoviesList,
    navigationOptions: {
      title: 'Movie list',
    }
  },
});

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator/>
      </Provider>
    );
  }
}
