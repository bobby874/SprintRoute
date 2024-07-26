import React, { useRef, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions, Image, Animated } from 'react-native';
import { Button } from 'react-native-elements';
import Home from './SearchDestination'


const SearchingDriverScreen = ({ navigation }) => {
  const cancelRide = () => {
    // Implement ride cancellation logic here
    navigation.goBack(Home);
  };

  const slideAnim = useRef(new Animated.Value(Dimensions.get('window').height)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [slideAnim]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.searchingContainer, { transform: [{ translateY: slideAnim }] }]}>
        <Image
          source={require('../../assets/SearchRider.png')} 
          style={styles.searchingImage}
        />
        <Text style={styles.searchingText}>Please hold! we are searching for nearby Sprint driver for you</Text>
        <Button
          title="Cancel Ride"
          buttonStyle={styles.cancelButton}
          onPress={cancelRide}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  searchingContainer: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
  },
  searchingImage: {
    width: 150,
    height: 100,
    marginBottom: 10,
  },
  searchingText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  cancelButton: {
    backgroundColor: 'orange',
    borderRadius: 20,
    padding: 10,
    width: '100%',
  },
});

export default SearchingDriverScreen;
