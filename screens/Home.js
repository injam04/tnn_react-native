import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { globalStyles } from '../utils/styles/GlobalStyle';

const Home = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>This Is Title</Text>
      <Text style={globalStyles.paragraph}>This is paragraph.</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
