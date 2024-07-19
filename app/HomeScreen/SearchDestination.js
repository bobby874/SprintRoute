import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, TextInput, Text} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Icon, Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import CustomDrawer from './CustomDrawer';
import Profile from '../Payment and Settings/Profile_Settings'
import Languages from '../Payment and Settings/Languages'
import Support from '../Payment and Settings/SupportScreen'
import Wallet from '../Payment and Settings/Wallet'
import InviteFriends from '../InviteScreen/InviteScreen'
import Logout from '../Login Opts'
import Safety from '../Payment and Settings/Safety'
import History from '../Payment and Settings/History'
import RideSelectionScreen from './RideSelection';
import SearchDriver from './SearchingDriver'
import RideInfo from './RIdeInfo'


const navigation = useNavigation();
  const handelNextScreenPress = () => {
      navigation.navigate(RideSelectionScreen)
  }

function MapScreen({ navigation }) {
  const [region, setRegion] = useState({
    latitude: 6.6746, // KNUST Latitude
    longitude: -1.5719, // KNUST Longitude
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });

  const [setDestination] = useState('');

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
            image={require('./assets/car.jpg')} />
        ))}
      </MapView>
      <View style={styles.searchContainer}>
        <View style={styles.header}>
          <Icon
            name="menu"
            size={30}
            onPress={() => navigation.openDrawer()} />
          <Text style={styles.heading}>Where do you want to go?</Text>
        </View>
        <View style={styles.destinationBox}>
          <View style={styles.destinationInput}>
            <Icon name="map-marker" type="font-awesome" size={24} color="#0000FF" />
            <Text style={styles.destinationText}>Paaajoe, KNUST</Text>
          </View>
        </View>
        <View style={styles.searchBox}>
          <TextInput
            placeholder="Search Destination"
            placeholderTextColor="#aaa"
            autoCapitalize="none"
            style={{ flex: 1, padding: 0 }}
            onChangeText={(text) => setDestination(text)} />
          <Icon name="search" size={20} />
        </View>
        <Button
          title="Find Driver"
          buttonStyle={styles.findDriverButton}
          icon={<Icon name="car" type="font-awesome" size={24} color="white" />}
          onPress={handelNextScreenPress} />
      </View>
    </View>
  );
}



const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const DrawerNavigator = () => {
 
  return (
    <Drawer.Navigator
      initialRouteName="MapScreen"
      drawerContent={(props) => <CustomDrawer {...props} />} // Use the custom drawer
    >
      <Drawer.Screen name="Home" component={MapScreen} options={{ title: 'Home' }} />
      <Drawer.Screen name="Profile" component={Profile} options={{ title: 'Profile' }} />
      <Drawer.Screen name="Wallet" component={Wallet} options={{ title: 'Wallet' }} />
      <Drawer.Screen name="History"  component={History} options={{ title: 'History' }} />
      <Drawer.Screen name="Languages"  component={Languages} options={{ title: 'Languages' }} />
      <Drawer.Screen name="Safety"  component={Safety} options={{ title: 'Safety' }} />
      <Drawer.Screen name="Support and FAQ"  component={Support} options={{ title: 'Support and FAQ' }} />
      <Drawer.Screen name="Invite Friends"  component={InviteFriends} options={{ title: 'Invite Friends' }} />
      <Drawer.Screen name="Logout"  component={Logout} options={{ title: 'Logout' }} />
    </Drawer.Navigator>
  );
};

const Home = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Drawer" component={DrawerNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Select Ride" component={RideSelectionScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Search Driver" component={SearchDriver} options={{ headerShown: false }} />
        <Stack.Screen name="Ride Info" component={RideInfo} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange', // Set the background color to orange
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  searchContainer: {
    position: 'absolute',
    bottom: 0,
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
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
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
    flex: 1,
  },
  findDriverButton: {
    marginTop: 20,
    backgroundColor: 'orange', // Changed to orange
    borderRadius: 20,
    paddingVertical: 10,
  },
  anotherScreenText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default Home;
