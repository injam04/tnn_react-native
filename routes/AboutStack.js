import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import About from '../screens/About';

const Stack = createNativeStackNavigator();

const AboutStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='AboutScreen'
        screenOptions={{
          headerStyle: {
            backgroundColor: '#eee',
          },
          headerTintColor: '#1C1C1C',
          headerTitleStyle: {
            fontFamily: getFontFamily(700),
            fontSize: adjustableSize(25),
          },
        }}
      >
        <Stack.Screen
          name='AboutScreen'
          component={About}
          options={{
            // headerShown: false,
            title: 'About',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AboutStack;
