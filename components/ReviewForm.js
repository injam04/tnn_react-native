import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  ToastAndroid,
} from 'react-native';
import React, { useState } from 'react';

const ReviewForm = ({ addNewReview }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = () => {
    if (title.trim() === '') {
      ToastAndroid.show('Please enter title.', ToastAndroid.LONG);
    } else if (body.trim() === '') {
      ToastAndroid.show('Please enter body.', ToastAndroid.LONG);
    } else if (rating.trim() === '') {
      ToastAndroid.show('Please enter rating.', ToastAndroid.LONG);
    } else {
      const pattern = /^[1-5]$/;
      const test = pattern.test(parseInt(rating));
      if (!test) {
        ToastAndroid.show('Rating must be 1 to 5.', ToastAndroid.LONG);
        return;
      }

      const data = {
        title: title,
        rating: parseInt(rating),
        body: body,
        key: Math.floor(Math.random() * 34761098 + 2703563).toString(),
      };
      addNewReview(data);
      // console.log(data);
      // setTitle('');
      // setBody('');
      // setRating('');
    }
  };

  return (
    <View>
      <TextInput
        placeholder={'Review Title'}
        style={styles.input}
        onChangeText={(text) => setTitle(text)}
        value={title}
      />

      <TextInput
        placeholder={'Review Body'}
        style={styles.input}
        onChangeText={setBody}
        value={body}
        multiline={true}
        numberOfLines={2}
      />

      <TextInput
        placeholder={'Rating (1 - 5)'}
        style={styles.input}
        onChangeText={(text) => setRating(text)}
        value={rating}
        keyboardType='numeric'
      />

      <Pressable onPress={handleSubmit} style={styles.button}>
        <Text style={styles.btnTxt}>Submit</Text>
      </Pressable>
    </View>
  );
};

export default ReviewForm;

const styles = StyleSheet.create({
  input: {
    // height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    marginBottom: 10,
    fontFamily: 'Nunito_400Regular',
  },
  button: {
    backgroundColor: 'maroon',
    borderRadius: 8,
    marginTop: 5,
    paddingVertical: 5,
  },
  btnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Nunito_400Regular',
    paddingVertical: 10,
    textTransform: 'uppercase',
  },
});
