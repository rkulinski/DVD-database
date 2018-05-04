import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import units from '../../utils/unitsCalculation';


const Header = ({text}) => (
  <View style={[styles.view]}>
    <Text style={[styles.text]}>
      {text}
    </Text>
  </View>
);

Header.propTypes = {
  text: PropTypes.string
};

const styles = StyleSheet.create({
  view: {
    width: '100%',
    height: 7 * units.vw,
  },
  text: {
    fontSize: 5 * units.vw,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export { Header };
