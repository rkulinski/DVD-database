import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';


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
        {title}
      </Text>
    </TouchableOpacity>
  </View>
);

ImageTapper.propTypes = {
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.number,
  onPress: PropTypes.func
};

const styles = StyleSheet.create({
  container: {
    width: '49%',
    height: 200,
    marginBottom: 5,
  },
  image: {
    width: '100%',
    height: 180,
  },
  imageCaption: {
    paddingTop: 5,
    color: 'black',
    textAlign: 'center',
  },
});

export { ImageTapper };
