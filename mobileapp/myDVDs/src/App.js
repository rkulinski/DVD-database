import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { createStackNavigator } from 'react-navigation';
import reducers from './store/reducers';
import Tiles from './containers/TilesView';
import MoviesList from './containers/MoviesList';
import LoginForm from './containers/LoginForm';
import LoadingView from './containers/LoadingView';
import AddMovieView from './containers/AddMovie';


const Navigator = createStackNavigator({
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
    },
  },
  MoviesList: {
    screen: MoviesList,
    navigationOptions: ({ navigation }) => {
      return {
        title: navigation.state.params.actor,
      };
    },
  },
  AddMovie: {
    screen: AddMovieView,
    navigationOptions: {
      title: 'Add movie',
    },
  },
});

export default class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Navigator/>
      </Provider>
    );
  }
}
