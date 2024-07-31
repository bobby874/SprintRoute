import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator, Alert } from 'react-native';

const SearchDriver = () => {
  const navigation = useNavigation();
  const [driverAccepted, setDriverAccepted] = useState(false);

  useEffect(() => {
    // Simulate driver acceptance after 10 seconds
    const timer = setTimeout(() => {
      setDriverAccepted(true);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (driverAccepted) {
        navigation.navigate('RIdeInfo')
     // Replace 'NextPage' with the actual route name
    }
  }, [driverAccepted, navigation]);

  const handleCancelRide = () => {
    Alert.alert('Ride Cancelled', 'Your ride has been cancelled.');
    // Add any other logic for cancelling the ride here
  };

  return (
    <View style={styles.container}>
      <View style={styles.bottomContainer}>
        <Image source={require('../../assets/SearchRider.png')} style={styles.image} />
        <ActivityIndicator size="large" color="orange" style={styles.indicator} />
        <Text style={styles.messageText}>Please hold! we are searching for nearby driver for you</Text>
        <TouchableOpacity style={styles.cancelButton} onPress={handleCancelRide}>
          <Text style={styles.cancelButtonText}>Cancel Ride</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    justifyContent: 'flex-end',
  },
  bottomContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 150,
    height: 100,
    marginVertical: 20,
  },
  indicator: {
    marginVertical: 10,
  },
  messageText: {
    fontSize: 18,
    marginVertical: 20,
    textAlign: 'center',
  },
  cancelButton: {
    backgroundColor: 'orange',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginVertical: 20,
  },
  cancelButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SearchDriver;
