import React from 'react';
import {
  View,
  ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';

const Spinner = ({ size }) => {
  return (
    <View>
      <ActivityIndicator size={size || 'large'} />
    </View>
  );
};

Spinner.propTypes = {
  size: PropTypes.string,
};

export { Spinner };
