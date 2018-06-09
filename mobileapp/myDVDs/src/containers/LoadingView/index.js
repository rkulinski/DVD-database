import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import firebase from 'firebase';
import _ from 'underscore';
import PropTypes from 'prop-types';
import { initializeFirebase, isUserLoggedIn } from '../../store/actions/authAction';
import { readActorsFromDatabase } from '../../store/actions/dbAction';
import units from '../../utils/unitsCalculation';


class LoadingView extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    const { push } = this.props.navigation;
    const { initializeFirebase, isUserLoggedIn, readActorsFromDatabase } = this.props;

    initializeFirebase();

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        isUserLoggedIn(true, user.email);
        readActorsFromDatabase();
      } else {
        isUserLoggedIn(false, '');
        push('LoginForm');
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    const { replace } = this.props.navigation;

    if (!_.isEmpty(nextProps.actors) && nextProps.email) {
      replace('Tiles');
    }
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
  readActorsFromDatabase: PropTypes.func,
  actors: PropTypes.shape({}),
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

const mapStateToProps = (state) => {
  return {
    actors : state.actorsDB.actorsDb,
    email: state.auth.email,
  };
};

export default connect(mapStateToProps, { readActorsFromDatabase, initializeFirebase, isUserLoggedIn })(LoadingView);
