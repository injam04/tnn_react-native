import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './HomeStack';
import AboutStack from './AboutStack';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName='HomeStack'>
      <Drawer.Screen
        name='HomeStack'
        component={HomeStack}
        options={{ drawerLabel: 'Home', headerShown: false }}
      />
      <Drawer.Screen
        name='AboutStack'
        component={AboutStack}
        options={{ drawerLabel: 'About', headerShown: false }}
      />
    </Drawer.Navigator>
  );
}
