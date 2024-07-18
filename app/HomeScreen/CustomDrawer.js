// CustomDrawer.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContainer}>
      <View style={styles.profileContainer}>
        <Image
          image={require('../../assets/Placeholder.png')} // Replace with your profile picture URL
          style={styles.profilePicture}
        />
        <Text style={styles.username}>username</Text>
        <Text style={styles.email}>username@google.com</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
  },
  profileContainer: {
    padding: 20,
    backgroundColor: 'orange',
    alignItems: 'center',
  },
  profilePicture: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  email: {
    fontSize: 14,
    color: 'gray',
  },
});

export default CustomDrawer;