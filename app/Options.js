import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import LoginOpts from './Login Opts'
import SignUp from './SignUp Opts'

export default function App() {
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate(LoginOpts); 
  };

  const handleSignUpPress = () => {
    navigation.navigate(SignUp);
  };
  
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/7605147.jpg')} style={styles.backgroundImage}>
        <View style={styles.innerContainer}>
          <Text style={styles.header}>Sprint.route</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signUpButton}
            onPress={handleSignUpPress}>
              <Text style={styles.buttonText}>Sign-Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0eee6',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    padding: 20,
    borderRadius: 8,
    width: 300,
    height: '80%',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  header: {
    fontSize: 60,
    fontWeight: '700',
    color: 'white',
    marginTop: 50,
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: 'orange',
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 10,
  },
  signUpButton: {
    backgroundColor: 'whitesmoke',
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '600',
    color: 'black',
  },
});