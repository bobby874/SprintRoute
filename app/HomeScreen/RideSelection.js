import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Icon, Button, ListItem, Avatar } from 'react-native-elements';
import SearchDriver from './SearchingDriver'

const RideSelectionScreen = ({ navigation }) => {
  const [selectedRide, setSelectedRide] = useState(null); // State to track selected ride
  const slideAnim = useRef(new Animated.Value(-300)).current;
  const navigation = useNavigation();
  const handelNextScreenPress = () => {
      navigation.navigate(SearchDriver)
  }

  const rides = [
    {
      id: 1,
      name: 'Sprint',
      price: 'Price',
      image: require('../../assets/car.png'),
    },
    {
      id: 2,
      name: 'VIP Bus',
      price: 'BOOK',
      image: require('../../assets/bus.png'),
    },
    {
      id: 3,
      name: 'Bike',
      price: 'Price',
      image: require('../../assets/bike.png'),
    },
  ];

  useEffect(() => {
    // Slide up animation
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [slideAnim]);


  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.destinationBox}>
          <View style={styles.destinationInput}>
            <Icon name="map-marker" type="font-awesome" size={24} color="#0000FF" />
            <Text style={styles.destinationText}>Neemuch RD. Gopalbari, Bari Sad</Text>
          </View>
          <View style={styles.destinationInput}>
            <Icon name="map-marker" type="font-awesome" size={24} color="#0000FF" />
            <Text style={styles.destinationText}>Jawahar Lal Nehru Marg, D-Block</Text>
          </View>
        </View>
        <ScrollView style={styles.rideOptions}>
          <Text style={styles.availableRidesText}>Available Rides</Text>
          {rides.map((ride) => (
            <TouchableOpacity key={ride.id} onPress={() => setSelectedRide(ride.id)}>
              <ListItem
                bottomDivider
                containerStyle={selectedRide === ride.id ? styles.selectedRide : null}
              >
                <Avatar source={ride.image} size="medium" />
                <ListItem.Content>
                  <ListItem.Title>{ride.name}</ListItem.Title>
                  <ListItem.Subtitle>{ride.capacity}</ListItem.Subtitle>
                </ListItem.Content>
                <Text>{ride.price}</Text>
              </ListItem>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <Button
          title="Find Driver"
          buttonStyle={styles.bookRideButton}
          onPress={handelNextScreenPress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  destinationBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  destinationInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 5,
  },
  destinationText: {
    marginLeft: 10,
    fontSize: 16,
  },
  rideOptions: {
    maxHeight: 200,
    marginBottom: 10,
  },
  availableRidesText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  selectedRide: {
    borderRadius: 10,
    backgroundColor: '#d3d3d3', // Highlight color for selected ride
  },
  bookRideButton: {
    backgroundColor: 'orange',
    borderRadius: 20,
    paddingVertical: 10,
  },
});

export default RideSelectionScreen;
