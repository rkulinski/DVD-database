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
    const { navigate } = this.props.navigation;
    const { actorId, actor, movies } = this.props;
    return(
      <View>
        <Text>
          Movies list for {actor}
        </Text>
        <FilteredList
          onPress={()=> {
            navigate('AddMovie');
          }}
          itemsArray={movies[actorId]}
        />
      </View>
    );
  }
}

MoviesList.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
  addMovie: PropTypes.func,
  movies: PropTypes.shape({}),
  actorId: PropTypes.string,
  actor: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    movies: state.actorsDB.actors,
    actorId: state.actorsDB.selectedActorId,
    actor: state.actorsDB.selectedActorName,
  };
};

export default connect(mapStateToProps, { addMovie })(MoviesList);
