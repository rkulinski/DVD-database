import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  StyleSheet,
} from 'react-native';
import _ from 'underscore';
import PropTypes from 'prop-types';
import { FilteredList } from '../../components';
import { addMovie } from '../../store/actions/dbAction';


class MoviesList extends Component {
  getMoviesAsArray(mObj) {
    return _.values(
      _.mapObject(mObj, (val) => {
        return `[${val.year}] ${val.title}`;
      })
    );
  }

  render() {
    const { push } = this.props.navigation;
    const { actorId, actor, movies } = this.props;
    return(
      <View  style={[styles.container]}>
        <FilteredList
          onPress={()=> {
            push('AddMovie');
          }}
          itemsArray={this.getMoviesAsArray(movies[actorId].movies)}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = (state) => {
  return {
    movies: state.actorsDB.actorsDb,
    actorId: state.actorsDB.selectedActorId,
    actor: state.actorsDB.selectedActorName,
  };
};

export default connect(mapStateToProps, { addMovie })(MoviesList);
