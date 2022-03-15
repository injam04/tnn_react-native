import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { globalStyles } from '../utils/styles/GlobalStyle';
import AppSafeAreaView from '../components/AppSafeAreaView';

const Home = ({ navigation, route }) => {
  const [reviews, setReviews] = useState([
    {
      title: 'Zelda, Breath of Fresh Air',
      rating: 5,
      body: 'lorem ipsum',
      key: '1',
    },
    {
      title: 'Gotta Catch Them All (again)',
      rating: 4,
      body: 'lorem ipsum',
      key: '2',
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: 'lorem ipsum',
      key: '3',
    },
  ]);

  useEffect(() => {
    // console.log('use effect ran');
    // console.log(route);
  }, [route.params?.post]);

  return (
    <>
      <View style={globalStyles.container}>
        <FlatList
          data={reviews}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('ReviewDetails', item)}
            >
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
