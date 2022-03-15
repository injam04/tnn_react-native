import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import {
  useFonts,
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
  Nunito_900Black,
} from '@expo-google-fonts/nunito';
import AppLoading from 'expo-app-loading';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ReviewDetails from './screens/ReviewDetails';
import { adjustableSize, getFontFamily } from './utils/uiHandler/Handlers';

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
    Nunito_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

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
      <StatusBar style='auto' />
    </NavigationContainer>
  );
}
