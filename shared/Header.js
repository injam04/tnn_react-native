import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { adjustableSize, getFontFamily } from '../utils/uiHandler/Handlers';

export default function Header({ title, navigation }) {
  const openMenu = () => {
    // navigation.openDrawer();
  };

  return (
    <ImageBackground
      style={styles.header}
      // source={require('../assets/game_bg.png')}
    >
      <MaterialIcons
        name='menu'
        size={28}
        onPress={openMenu}
        style={styles.icon}
      />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          source={require('../assets/heart_logo.png')}
          style={styles.headerImage}
        />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: adjustableSize(25),
    fontFamily: getFontFamily(700),
    color: '#333',
    letterSpacing: 1,
  },
  icon: {
    position: 'absolute',
    left: 16,
  },
  headerImage: {
    width: 26,
    height: 26,
    marginRight: 10,
  },
});
