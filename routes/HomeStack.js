import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='HomeScreen'
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
          name='HomeScreen'
          component={Home}
          options={{
            // headerShown: false,
            title: 'GameZone',
          }}
        />

        <Stack.Screen
          name='ReviewDetails'
          component={ReviewDetails}
          options={{
            // headerShown: true,
            title: 'Review Details',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeStack;
