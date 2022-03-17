import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Modal,
  ToastAndroid,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { globalStyles } from '../utils/styles/GlobalStyle';
import AppSafeAreaView from '../components/AppSafeAreaView';
import Card from '../shared/Card';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from '../components/ReviewForm';

const Home = ({ navigation, route }) => {
  const [modalOpen, setModalOpen] = useState(false);
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

  const addNewReview = (review) => {
    setReviews([review, ...reviews]);
    setModalOpen(false);
    ToastAndroid.show('Review added successfully.', ToastAndroid.LONG);
  };

  return (
    <>
      <View style={globalStyles.container}>
        <MaterialIcons
          name='add'
          size={24}
          style={styles.modalToggle}
          onPress={() => setModalOpen(true)}
        />

        <FlatList
          data={reviews}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('ReviewDetails', item)}
            >
              <Card>
                <Text style={globalStyles.titleText}>{item.title}</Text>
              </Card>
            </TouchableOpacity>
          )}
        />
      </View>

      <Modal visible={modalOpen} animationType='fade' transparent={true}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <MaterialIcons
              name='close'
              size={24}
              style={{ ...styles.modalClose }}
              onPress={() => setModalOpen(false)}
            />
            <ReviewForm addNewReview={addNewReview} />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  modalToggle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 0,
    marginBottom: 10,
    textAlign: 'right',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#0005',
  },
  modalView: {
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 20,
  },
});
