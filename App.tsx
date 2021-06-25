import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Navigator from './src/navigator/Navigator';

const App = () => {
  return (
    // <SafeArea
    <SafeAreaView style={styles.container}>
      <Navigator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
