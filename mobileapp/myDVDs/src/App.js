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
  LoadingView: { screen: LoadingView },
  LoginForm: { screen: LoginForm },
  Tiles: { screen: Tiles },
  MoviesList: { screen: MoviesList },
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
