import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';

const EnableLocation = () => {
    const navigation = useNavigation();
    const handleOptionPress = () => {
        navigation.navigate('Options');
    };
  const enableLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    console.log(location);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/loc-removebg-preview.png')} style={styles.image} />
      <Text style={styles.title}>Enable Your Location</Text>
      <Text style={styles.subtitle}>
        To search for the best nearby driver, we want to know your current location
      </Text>
      <TouchableOpacity style={styles.button} onPress={enableLocation}>
        <Text style={styles.buttonText} onPress={handleOptionPress}>Use current location</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.skipButton}>
        <Text style={styles.skipButtonText} onPress={handleOptionPress}>Skip for now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 350,
    height: 300,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#FF8000',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    width: '80%',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight:'600'
  },
  skipButton: {
    marginTop: 10,
  },
  skipButtonText: {
    color: 'ornage',
    fontSize: 16,
  },
});

export default EnableLocation;
