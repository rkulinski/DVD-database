import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import firebase from 'firebase';
import PropTypes from 'prop-types';
import { initializeFirebase, isUserLoggedIn } from '../../store/actions/authAction';
import units from '../../utils/unitsCalculation';


class LoadingView extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    const { navigate } = this.props.navigation;
    const { initializeFirebase, isUserLoggedIn } = this.props;

    initializeFirebase();


    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        isUserLoggedIn(true, user.email);
        navigate('Tiles');
      } else {
        isUserLoggedIn(false, '');
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
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
  initializeFirebase: PropTypes.func,
  isUserLoggedIn: PropTypes.func,
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

export default connect(null, { initializeFirebase, isUserLoggedIn })(LoadingView);
