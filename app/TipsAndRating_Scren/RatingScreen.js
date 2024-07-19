import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import TipsScreen from './TipsScreen'

const StarRating = ({ rating, maxStars, onStarPress, starSize, fullStarColor, emptyStarColor }) => {
  return (
    <View style={styles.starContainer}>
      {Array.from({ length: maxStars }, (_, index) => (
        <TouchableOpacity key={index} onPress={() => onStarPress(index + 1)}>
          <Icon
            name={index < rating ? 'star' : 'star-o'}
            size={starSize || 30}
            color={index < rating ? fullStarColor || '#FFD700' : emptyStarColor || '#DDD'}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};
const navigation = useNavigation();
const RatingScreen = () => {
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState('');

  const handleRatingChange = (rating) => {
    setRating(rating);
  };

  const handleCommentsChange = (text) => {
    setComments(text);
  };

  const handleSubmitReview = () => {
    // Handle the submit review action here
    console.log('Rating:', rating);
    console.log('Comments:', comments);
    navigation.navigate(TipsScreen)
  };

  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SafeAreaView>
        <View style={styles.nav}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.navText} >←</Text> 
        </TouchableOpacity>
        <Text style={styles.header}>Rate Driver</Text>
      </View>
      </SafeAreaView>
      <View style={styles.card}>
        <Image
        source={require('../../assets/Placeholder.png')}
        style={styles.profileImage}
      />
      <Text style={styles.userName}>Username</Text>
      <Text style={styles.userId}>userId</Text>
      <Text style={styles.title}>How is your trip?</Text>
      <Text style={styles.subtitle}>Your feedback will help improve driving experience</Text>
      <StarRating
        rating={rating}
        maxStars={5}
        onStarPress={handleRatingChange}
        fullStarColor={'#FFD700'}
        emptyStarColor={'#DDD'}
        starSize={40}
      />
      <TextInput
        style={styles.commentsInput}
        placeholder="Additional comments..."
        value={comments}
        onChangeText={handleCommentsChange}
        multiline
      />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmitReview}>
        <Text style={styles.submitButtonText}>Submit Review</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    padding: 20,
  },
   card: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  nav: {
        flexDirection: 'row',
        marginBottom: 50,
        marginRight: 200,
        display: 'flex',
        alignItems: 'center',
    justifyContent: 'center'
    },
  header: {
    fontSize: 25,
    fontWeight: '600',
    fontFamily: 'Trebuchet MS',
  },
  navText: {
    fontSize: 30,
    fontWeight: '600',
    marginRight: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 20,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 10,
  },
  userId: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginVertical: 10,
  },
  starContainer: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  commentsInput: {
    width: '100%',
    height: 100,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    textAlignVertical: 'top',
    marginBottom: 20,
  },
  submitButton: {
    width: '100%',
    padding: 15,
    backgroundColor: 'orange',
    borderRadius: 10,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RatingScreen;
