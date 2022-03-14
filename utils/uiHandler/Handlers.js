import { Dimensions } from 'react-native';

export const getFontFamily = (weight) => {
  const lang_dict = {
    400: ['Nunito_400Regular'],
    600: ['Nunito_600SemiBold'],
    700: ['Nunito_700Bold'],
    800: ['Nunito_800ExtraBold'],
    900: ['Nunito_900Black'],
  };

  if (weight) {
    return lang_dict[`${weight}`][0];
  } else {
    return lang_dict[`${400}`][0];
  }
};

export const adjustableSize = (mainsize, diff = 2) => {
  const { height, width } = Dimensions.get('window');

  //   console.log(height, ' -- ', width);
  //   console.log(mainsize, ' -- ', diff);

  if (height <= 685 || width <= 415) return mainsize - diff;
  else return mainsize;
};
