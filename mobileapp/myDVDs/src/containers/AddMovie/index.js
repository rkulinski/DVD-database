import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';
import { addMovie } from '../../store/actions/dbAction';
import { Input } from '../../components';

class AddMovieView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTitle: '',
      year: '',
    };

    this.addMovieAndGoToList = this.addMovieAndGoToList.bind(this);
  }

  addMovieAndGoToList() {
    const { addMovie, actorId, navigation: { navigate } } = this.props;
    const { newTitle, year } = this.state;
    addMovie(actorId, `[${year}] ${newTitle}`);
    navigate('MoviesList');
  }

  render() {
    const { actor } = this.props;

    return (
      <View style={[styles.view]}>
        <Text style={[styles.info]}>Adding {actor} movie</Text>
        <Input
          label="title"
          value={this.state.newTitle}
          onChangeText={newTitle => this.setState({ newTitle })}
        />
        <Input
          label="year"
          value={this.state.year}
          onChangeText={year => this.setState({ year })}
        />
        <Button
          onPress={() => {this.addMovieAndGoToList();}}
          title="Add movie"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  info: {
    textAlign: 'center',
    fontSize: 20,
  },
});

const mapStateToProps = (state) => {
  return {
    actorId: state.actorsDB.selectedActorId,
    actor: state.actorsDB.selectedActorName,
  };
};

export default connect(mapStateToProps, {addMovie})(AddMovieView);
export { AddMovieView as AddMovieViewNotConnected };
