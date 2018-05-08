import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  ScrollView,
  StyleSheet,
  Platform,
} from 'react-native';
import firebase from 'firebase';
import PropTypes from 'prop-types';
import {
  ImageTapper,
  Header,
  LogoutSection,
} from '../../components';
import ArnoldImg from '../../assets/tilesImages/Arnold.jpg';
import StalloneImg from '../../assets/tilesImages/Stallone.jpg';
import JCVDImg from '../../assets/tilesImages/JCVD.jpg';
import Steven from '../../assets/tilesImages/Steven.jpg';
import Chuck from '../../assets/tilesImages/Chuck.jpg';

const actorNames = [
  { name:'Arnold Schwarzenegger', img: ArnoldImg},
  { name:'Sylwester Stallone', img: StalloneImg},
  { name:'Jean Claude Van Damme', img: JCVDImg},
  { name:'Steven Seagal', img: Steven},
  { name:'Chuck Norris', img: Chuck},
];

class Tiles extends Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={[styles.container]}>
        <Header
          text={`My DVD's list (${this.props.userMail})`}
        />
        <ScrollView>
          <View style={[styles.tilesView]}>
            {actorNames.map(({name, img}) => (
              <ImageTapper
                key={name}
                title={name}
                imgSrc={img}
                onPress={() =>
                  navigate('MoviesList', { actor: name })
                }
              />
            ))}
          </View>
          <LogoutSection
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
    navigate: PropTypes.func
  }),
  userMail: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    paddingTop: (Platform.OS === 'ios') ? 0 : 0,
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
  }
});

const mapStateToProps = (state) => {
  return {
    userMail: state.auth.email,
  };
};

export default connect(mapStateToProps)(Tiles);
