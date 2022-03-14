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
    <View>
      <Home />
      <StatusBar style='auto' />
    </View>
  );
}
