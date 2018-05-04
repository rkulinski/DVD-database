import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Platform,
} from 'react-native';
import { ImageTapper } from '../../components';
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
    return (
      <View style={[styles.container]}>
        <View>
          <Text>
            Select actor
          </Text>
        </View>
        <ScrollView>
          <View style={[styles.tilesView]}>
            {actorNames.map(({name, img}) => (
              <ImageTapper
                key={name}
                title={name}
                imgSrc={img}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
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

export default Tiles;
