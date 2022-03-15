import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, View } from 'react-native';

const AppSafeAreaView = (props) => {
  const { safeAreaStyle, style } = props;
  return (
    <SafeAreaView style={[styles.safeAreaContainer, style ? style : {}]}>
      <View
        style={[
          {
            backgroundColor: '#FFF',
            height: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
          },
          safeAreaStyle,
        ]}
      />

      {props.children}
    </SafeAreaView>
  );
};

export default AppSafeAreaView;

const styles = StyleSheet.create({
  safeAreaContainer: {
    backgroundColor: '#FFF',
  },
});
