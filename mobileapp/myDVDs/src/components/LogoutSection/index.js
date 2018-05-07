import React from 'react';
import {
  View,
  Button,
  StyleSheet,
} from 'react-native';


const LogoutSection = ({ onLogout }) => {
  return(
    <View style={[styles.container]}>
      <Button
        title="Logout"
        onPress={onLogout}
        style={[styles.button]}
      />
    </View>
)};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    marginTop: 25,
  },

  button: {
    paddingTop: 5,
    color: 'black',
    textAlign: 'center',
  },
});

export { LogoutSection };
