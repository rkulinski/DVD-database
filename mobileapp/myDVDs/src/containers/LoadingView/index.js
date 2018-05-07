import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import firebase from 'firebase';
import PropTypes from 'prop-types';
import firebaseConfig from '../../../firebase.config';
import units from '../../utils/unitsCalculation';


class LoadingView extends Component {
  constructor() {
    super();
    this.state = {
      LoggedIn: false,
    };
  }

  componentWillMount() {
    const { navigate } = this.props.navigation;

    firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
        navigate('Tiles', { user: user.email });
      } else {
        this.setState({ loggedIn: false });
        navigate('LoginForm');
      }
    });
  }

  render() {
    return(
      <View style={[styles.view]}>
        <Text style={[styles.text]}>
          Awsome DVD app!
        </Text>
      </View>
    );
  }
}

LoadingView.propTypes = {
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#339CFF',
    fontSize: 7 * units.vw,
  },
});

export default LoadingView;
