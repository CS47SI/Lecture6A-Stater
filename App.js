import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigation from './App/Navigation/AppNavigation';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppNavigation/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
