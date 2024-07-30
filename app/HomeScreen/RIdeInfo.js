import React, { useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const RideDetails = () => {
  const slideAnim = useRef(new Animated.Value(500)).current;
  const cancelRide = () => {
    // Implement ride cancellation logic here
    (useNavigation()).goBack('Home');
  };

  useEffect(() => {
    slideUp();
  }, []);

  const slideUp = () => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const navigation = useNavigation();
  const handleChatScreen = () => {
    (useNavigation()).navigate('ChatScreen');
  };

  const [tripEnded, setTripEnded] = useState(false);

  const endTrip = () => {
    // Logic to end the trip, e.g., API call to mark trip as ended
    setTripEnded(true);
  };

  // Navigate to Tips page if trip has ended
  if (tripEnded) {
    navigation.navigate('TipsScreen');
  }

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.rideInfo,
          {
            transform: [{ translateY: slideAnim }],
          },
        ]}
      >
        <Text style={styles.arrivalText}>Your Ride is arriving in 3 mins</Text>
        <View style={styles.driverInfo}>
          <Image
            source={require('../../assets/Placeholder.png')} // Replace with actual image URL
            style={styles.driverImage}
          />
          <View>
            <Text style={styles.driverName}>Driver Name</Text>
            <Text style={styles.carDetails}>Car Brand - Registration No</Text>
          </View>
          <View style={styles.contactIcons}>
            <TouchableOpacity style={styles.iconContainer}>
              <Icon name="call" size={24} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer} onPress={handleChatScreen}>
              <Icon name="chatbubble" size={24} color="#000" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.locationInfo}>
          <View style={styles.locationRow}>
            <View style={styles.dotContainer}>
              <View style={[styles.dot, { backgroundColor: 'orange' }]} />
            </View>
            <Text style={styles.locationText}>Pickup Location</Text>
          </View>
          <View style={styles.verticalLine} />
          <View style={styles.locationRow}>
            <View style={styles.dotContainer}>
              <View style={[styles.dot, { backgroundColor: 'green' }]} />
            </View>
            <Text style={styles.locationText}>Destination Location</Text>
            <TouchableOpacity style={styles.changeButton}>
              <Text style={styles.changeText}>Change</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.paymentInfo}>
          <Text style={styles.paymentText}>Cash</Text>
          <TouchableOpacity>
            <Text style={styles.changePaymentText}>Change Payment method</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Text style={styles.price}>GHc20</Text>
          <TouchableOpacity style={styles.cancelButton} onPress={cancelRide}>
            <Text style={styles.cancelText}>Cancel Ride</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rideInfo: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  arrivalText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  driverInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  driverImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  driverName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  carDetails: {
    fontSize: 14,
    color: '#666',
  },
  contactIcons: {
    flexDirection: 'row',
    marginLeft: 'auto',
  },
  iconContainer: {
    backgroundColor: '#FFA500', // Orange color
    borderRadius: 20,
    padding: 5,
    marginLeft: 10,
  },

  locationInfo: {
    marginBottom: 10,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dotContainer: {
    width: 20,
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  verticalLine: {
    height: 20,
    width: 2,
    backgroundColor: '#ccc',
    marginLeft: 9,
  },
  locationText: {
    fontSize: 14,
    color: '#666',
    flex: 1,
  },
  changeButton: {
    marginLeft: 10,
  },
  changeText: {
    fontSize: 14,
    color: '#4CAF50',
  },
  paymentInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
  },
  paymentText: {
    fontSize: 14,
    color: '#666',
  },
  changePaymentText: {
    fontSize: 14,
    color: '#4CAF50',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  cancelButton: {
    backgroundColor: '#FF3B30',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    alignItems: 'center',
  },
  cancelText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RideDetails;
