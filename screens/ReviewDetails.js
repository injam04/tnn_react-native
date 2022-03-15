import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { globalStyles } from '../utils/styles/GlobalStyle';
import AppSafeAreaView from '../components/AppSafeAreaView';

const ReviewDetails = ({ navigation, route }) => {
  const { body, key, rating, title } = route.params;

  return (
    <>
      <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>{title}</Text>
        <Text style={globalStyles.paragraph}>{body}</Text>
        <Text style={globalStyles.paragraph}>{rating}</Text>
        <Button
          title='Go to Home'
          onPress={() =>
            navigation.navigate({
              name: 'HomeScreen',
              params: { post: 'postText' },
              merge: true,
            })
          }
        />
      </View>
    </>
  );
};

export default ReviewDetails;

const styles = StyleSheet.create({});
