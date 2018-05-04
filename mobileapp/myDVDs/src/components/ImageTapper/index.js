import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet
} from 'react-native';


const ImageTapper = ({ title, onPress, imgSrc }) => (
  <View style={[styles.container]}>
    <TouchableOpacity
      title={title}
      onPress={onPress}
    >
      <Image
        style={[styles.image]}
        source={imgSrc}
        reziseMode="stretch"
      />
      <Text style={[styles.imageCaption]}>
        My first button
      </Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '48%'
  },
  image: {
    width: '100%'
  },
  imageCaption: {
    paddingTop: 5,
    color: 'black',
    textAlign: 'center'
  },
});

export { ImageTapper };
