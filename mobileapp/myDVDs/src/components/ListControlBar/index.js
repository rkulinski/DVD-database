import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import units from '../../utils/unitsCalculation';


const ListControlBar = () => (
  <View style={[styles.view]}>
    <Text style={[styles.button]}>
      Go back
    </Text>
    <Text style={[styles.addButton]}>
      +
    </Text>
  </View>
);

const styles = StyleSheet.create({
  view: {
    width: '100%',
    height: 150,
  },
  button: {
    fontSize: 7 * units.vw,
  },
  addButton: {
    height: 100,
  },
});

export { ListControlBar };
