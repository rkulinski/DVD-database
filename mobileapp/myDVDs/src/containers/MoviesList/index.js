import React, { Component } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';


class MoviesList extends Component {
  render() {
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;

    return(
      <View>
        <Button
          title="Go back"
          onPress={() =>
            navigate('Tiles')
          }
        />
        <Text>
          Movies list for {params.actor}
        </Text>
      </View>
    );
  }
}

export default MoviesList;
