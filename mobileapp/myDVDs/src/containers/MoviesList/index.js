import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import { FilteredList } from '../../components';
import { addMovie } from '../../store/actions/dbAction';


class MoviesList extends Component {
  render() {
    const { state: { params } } = this.props.navigation;


    return(
      <View>
        <Text>
          Movies list for {params.actor}
        </Text>
        <FilteredList
          onPress={()=> {this.props.addMovie(params.actorId, 'sample');}}
          itemsArray={this.props.movies[params.actorId]}
        />
      </View>
    );
  }
}

MoviesList.propTypes = {
  navigation: PropTypes.shape({
    state: {
      params: PropTypes.shape({
        actorId: PropTypes.string,
        actor: PropTypes.string,
      }),
    },
  }),
  addMovie: PropTypes.func,
  movies: PropTypes.arrayOf(PropTypes.string),
};

const mapStateToProps = (state) => {
  return {
    movies: state.actorsDB.actors,
  };
};

export default connect(mapStateToProps, { addMovie })(MoviesList);
