import { StyleSheet } from 'react-native';
import { adjustableSize, getFontFamily } from '../uiHandler/Handlers';

export const globalStyles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },

  titleText: {
    fontFamily: getFontFamily(600),
    fontSize: adjustableSize(18, 0),
    color: '#1C1C1C',
  },

  paragraph: {
    fontFamily: getFontFamily(400),
    marginVertical: 8,
    lineHeight: 20,
    color: '#1C1C1C',
  },
});
