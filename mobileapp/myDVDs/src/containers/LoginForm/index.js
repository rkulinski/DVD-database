import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Button,
  Text,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import { loginUser } from '../../store/actions/authAction';
import { Input, Spinner } from '../../components';
import units from '../../utils/unitsCalculation';


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.loginUser = this.loginUser.bind(this);
  }

  loginUser() {
    const { email, password } = this.state;
    this.props.loginUser(email, password);
  }

  renderButton() {
    if (this.props.authLoading) {
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
          {this.props.authError}
        </Text>
        {this.renderButton()}
      </View>
    );
  }
}

LoginForm.propTypes = {
  onPress: PropTypes.func,
  authLoading: PropTypes.bool,
  loginUser: PropTypes.func,
  authError: PropTypes.string,
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
  },
});

const mapStateToProps = (state) => {
  return {
    authLoading: state.auth.loading,
    authEmail: state.auth.email,
    authError: state.auth.errorMsg,
  };
};

export default connect(mapStateToProps, { loginUser })(LoginForm);
