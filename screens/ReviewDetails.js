import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { globalStyles, images } from '../utils/styles/GlobalStyle';
import AppSafeAreaView from '../components/AppSafeAreaView';
import Card from '../shared/Card';
import { getFontFamily } from '../utils/uiHandler/Handlers';

const ReviewDetails = ({ navigation, route }) => {
  const { body, key, rating, title } = route.params;

  return (
    <>
      <View style={globalStyles.container}>
        <Card>
          <Text style={globalStyles.titleText}>{title}</Text>
          <Text style={globalStyles.paragraph}>{body}</Text>
          <View style={styles.rating}>
            <Text style={{ fontFamily: getFontFamily(400) }}>
              GameZone rating:{' '}
            </Text>
            <Image source={images.rating[rating]} />
          </View>
        </Card>
      </View>
    </>
  );
};

export default ReviewDetails;

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
});
