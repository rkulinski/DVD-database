import React, { Component } from 'react';
import {
  View,
  FlatList,
  TextInput,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import { ItemList } from '../';
import units from '../../utils/unitsCalculation';


class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      filteredList: this.props.itemsArray,
    };

    this.updateList = this.updateList.bind(this);
  }

  updateList(newSearchTerm) {
    const matchesFilter = new RegExp(newSearchTerm, 'i');
    const newList = this.props.itemsArray.filter(item => !newSearchTerm || matchesFilter.test(item));

    this.setState({
      searchTerm: newSearchTerm,
      filteredList: newList,
    });
  }

  render() {
    return (
      <View style={[styles.view]}>
        <TextInput
          placeholder="Search..."
          value={this.state.searchTerm}
          onChangeText={this.updateList}
          style={[styles.search]}
        />
        <FlatList
          data={this.state.filteredList}
          renderItem={({item}) => <ItemList item={item}/>}
        />
      </View>
    );
  }
}

FilteredList.propTypes = {
  itemsArray: PropTypes.arrayOf(PropTypes.string)
};

const styles = StyleSheet.create({
  view: {
    width: '100%',
  },
  search: {
    height: 40,
    padding: 10,
    marginLeft: 5,
    marginRight: 5,
    fontSize: 5 * units.vw,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export { FilteredList };
