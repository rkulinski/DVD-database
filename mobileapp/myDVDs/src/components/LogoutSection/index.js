import React from 'react';
import {
  View,
  Button,
  StyleSheet,
} from 'react-native';


const LogoutSection = ({ onLogout, username }) => {
  return(
    <View style={[styles.container]}>
      <Button
        title={`Logout (${username})`}
        onPress={onLogout}
        style={[styles.button]}
      />
    </View>
)};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 30,
    marginBottom: 5,
  },

  button: {
    paddingTop: 5,
    color: 'black',
    textAlign: 'center',
  },
});

export { LogoutSection };
