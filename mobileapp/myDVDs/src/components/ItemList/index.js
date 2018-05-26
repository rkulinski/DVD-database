import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import units from '../../utils/unitsCalculation';


const ItemList = ({item}) => (
  <TouchableOpacity
    key={item}
  >
    <View style={[styles.listItem]}>
      <Text style={[styles.listTitle]}>
        {item}
      </Text>
      <Text style={[styles.listNextMarker]}>&#10095;</Text>
    </View>
  </TouchableOpacity>
);

ItemList.propTypes = {
  item: PropTypes.string
};

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15,
    paddingBottom: 15,
  },
  listTitle: {
    fontSize: 5 * units.vw,
  },
  listNextMarker: {
    marginLeft: 'auto',
    paddingRight: 10,
  }
});

export { ItemList };
