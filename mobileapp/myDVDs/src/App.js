import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StackNavigator } from 'react-navigation';
import firebase from 'firebase';
import reducers from './reducers';
import Tiles from './containers/TilesView';
import MoviesList from './containers/MoviesList';
import LoginForm from './containers/LoginForm';
import firebaseConfig from '../firebase.config';


const store = createStore(reducers);

const Navigator = StackNavigator({
  Tiles: { screen: Tiles },
  MoviesList: { screen: MoviesList },
});

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      LoggedIn: false,
    };
  }

  componentWillMount() {
    firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    if (this.state.loggedIn) {
      return <Navigator/>;
    }
    return <LoginForm/>;
  }

  render() {
    return (
      <Provider store={store}>
        {this.renderContent()}
      </Provider>
    );
  }
}
