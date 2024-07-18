
import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, TextInput, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Icon } from 'react-native-elements';

const SearchScreen = () => {
  const [region, setRegion] = useState({
    latitude: 6.6746, // KNUST Latitude
    longitude: -1.5719, // KNUST Longitude
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });

  const [destination, setDestination] = useState('');

  const cars = [
    { id: 1, latitude: 6.6766, longitude: -1.5729 },
    { id: 2, latitude: 6.6726, longitude: -1.5709 },
    { id: 3, latitude: 6.6756, longitude: -1.5739 },
    { id: 4, latitude: 6.6736, longitude: -1.5715 },
  ];

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={region}
        onRegionChangeComplete={(region) => setRegion(region)}
      >
        <Marker coordinate={region} pinColor="blue" title="You are here" />
        {cars.map((car) => (
          <Marker
            key={car.id}
            coordinate={{ latitude: car.latitude, longitude: car.longitude }}
            image={require('../../assets/car.png')}
          />
        ))}
      </MapView>
      <View style={styles.searchContainer}>
        <Text style={styles.heading}>Where do you want to go?</Text>
        <View style={styles.destinationBox}>
          <View style={styles.destinationInput}>
            <Icon name="map-marker" type="font-awesome" size={24} color="#0000FF" />
            <Text style={styles.destinationText}>Neemuch RD. Gopalbari, Bari Sad</Text>
          </View>
        </View>
        <View style={styles.searchBox}>
          <TextInput
            placeholder="Search Destination"
            placeholderTextColor="#aaa"
            autoCapitalize="none"
            style={{ flex: 1, padding: 0 }}
            onChangeText={(text) => setDestination(text)}
          />
          <Icon name="search" size={20} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  searchContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'orange',
    padding: 80,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  destinationBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  destinationInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 5,
    flex: 1,
  },
  destinationText: {
    marginLeft: 10,
    fontSize: 16,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 5,
    flex: 2,
  },
});

export default SearchScreen;
