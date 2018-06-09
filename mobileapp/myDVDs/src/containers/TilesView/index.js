import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  ScrollView,
  StyleSheet,
  Platform,
} from 'react-native';
import firebase from 'firebase';
import _ from 'underscore';
import PropTypes from 'prop-types';
import {
  ImageTapper,
  Header,
  LogoutSection,
} from '../../components';
import { selectActor } from '../../store/actions/dbAction';


class Tiles extends Component {
  constructor() {
    super();

    this.onActorSelect = this.onActorSelect.bind(this);
  }

  onActorSelect(actorId, actor) {
    const { push } = this.props.navigation;

    this.props.selectActor(actorId, actor);
    push('MoviesList', {actor});
  }

  renderActors() {
    const { actors } = this.props;

    return _.values(_.mapObject(actors, (actor, id) => (
      <ImageTapper
        key={id}
        title={actor.name}
        imgSrc={actor.img}
        onPress={() => this.onActorSelect(id, actor.name)}
      />
    )));
  }

  render() {
    return (
      <View style={[styles.container]}>
        <ScrollView>
          <View style={[styles.tilesView]}>
            {this.renderActors()}
          </View>
          <LogoutSection
            username={this.props.userMail}
            onLogout={() => {
              firebase.auth().signOut();
            }}
          />
        </ScrollView>
      </View>
    );
  }
}

Tiles.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
  userMail: PropTypes.string,
  selectActor: PropTypes.func,
  actors: PropTypes.shape({}),
};

const styles = StyleSheet.create({
  container: {
    paddingTop: (Platform.OS === 'ios') ? 0 : 0,
    paddingBottom: 5,
    flex: 1,
  },
  tilesView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  tileWrapper: {
    flex: 2,
  },
});

const mapStateToProps = (state) => {
  return {
    userMail: state.auth.email,
    actors : state.actorsDB.actorsDb,
  };
};

export default connect(mapStateToProps, { selectActor })(Tiles);
