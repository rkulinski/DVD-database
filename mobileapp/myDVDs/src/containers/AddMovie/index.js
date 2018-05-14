import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';
import { saveMovieToDb } from '../../store/actions/dbAction';
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
    const { actorId, navigation: { navigate } } = this.props;
    const { newTitle, year } = this.state;
    this.props.saveMovieToDb({ actorId ,newTitle, year });
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

export default connect(mapStateToProps, { saveMovieToDb })(AddMovieView);
export { AddMovieView as AddMovieViewNotConnected };
