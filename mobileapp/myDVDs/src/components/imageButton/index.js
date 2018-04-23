import React from 'react';
import {
  Button,
  Text
} from 'react-native';


const ImageButton = ({ title, onPress }) => (
  <Button
    title={title}
    onPress={onPress}
  >
    <Text>
      My first button
    </Text>
  </Button>
);

export { ImageButton };
