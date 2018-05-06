import React from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import units from '../../utils/unitsCalculation';


const Input = ({ label, value, onChangeText, secureTextEntry }) => (
  <View style={[styles.view]}>
    <Text style={[styles.label]}>{label}</Text>
    <TextInput
      secureTextEntry={secureTextEntry}
      autoCorrect={false}
      value={value}
      onChangeText={onChangeText}
      placeholder={`type ${label}`}
      autoCapitalize='none'
      style={[styles.input]}
    />
  </View>
);

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  secureTextEntry: PropTypes.bool,
};

const styles = StyleSheet.create({
  view: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    borderColor: 'black',
    borderWidth: 2,
  },
  label: {
    flex: 1,
    paddingLeft: 20,
    fontSize: 5 * units.vw,
  },
  input: {
    flex: 2,
    fontSize: 5 * units.vw,
  },
});

export { Input };
