import React, { Component } from 'react';
import {
  View,
  Button,
  Text,
  StyleSheet,
} from 'react-native';
import firebase from 'firebase';
import PropTypes from 'prop-types';
import { Input, Spinner } from '../../components';
import units from '../../utils/unitsCalculation';


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false,
    };

    this.loginUser = this.loginUser.bind(this);
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLoginFail = this.onLoginFail.bind(this);
  }

  loginUser() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        this.onLoginSuccess();
      })
      .catch(() => {
        this.onLoginFail();
      });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: '',
    });
  }

  onLoginFail() {
    this.setState({
      error: 'Incorrect credentials',
      loading: false,
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small"/>;
    }

    return (
      <Button
        title="Login"
        onPress={this.loginUser}
        style={[styles.button]}
      />
    );
  }

  render() {
    return(
      <View style={[styles.view]}>
        <Input
          label="email"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />
        <Input
          label="password"
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
          secureTextEntry
        />
        <Text style={[styles.error]}>
          {this.state.error}
        </Text>
        {this.renderButton()}
      </View>
    );
  }
}

LoginForm.propTypes = {
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    color: '#339CFF',
  },
  error: {
    color: 'red',
    fontSize: 5 * units.vw,
    textAlign: 'center',
  }
});

export default LoginForm;
