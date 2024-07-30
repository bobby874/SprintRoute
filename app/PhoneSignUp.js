import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';


const PhoneSignup = () => {
    const navigation = useNavigation();
    const handlePhoneSignupPress = () => {
      navigation.navigate('Name');
    };

  return (
    <View style={styles.container}>
        <SafeAreaView style={styles.back}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backArrow}>
                <FontAwesomeIcon icon={faAngleLeft} size={24} color="#000" />
            </TouchableOpacity>
        </ SafeAreaView>
        <Text style={styles.title}>Enter Phone Number</Text>
        <View style={styles.inputGroup}>
            <TextInput style={[styles.input, styles.ccode]} placeholder="+" keyboardType="phone-pad" />
            <TextInput style={[styles.input, styles.number]} placeholder="phone" keyboardType="phone-pad" />
        </View>
        <Text style={styles.note}>You would be sent an OTP for Verification</Text>
      <TouchableOpacity style={[styles.button, styles.continueButton]} onPress={handlePhoneSignupPress}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  nav: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 40,
    left: 20,
  },
  backArrow: {
    marginRight: 10,
  },
  title: {
    fontWeight: '600',
    fontSize: 24,
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
  },
  input: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginHorizontal: 5,
  },
  ccode: {
    width: '20%',
    textAlign: 'center',
  },
  number: {
    width: '75%',
  },
  note: {
    fontSize: 12,
    color: '#666',
    textAlign: 'left',
    width: '100%',
    paddingLeft: 5,
  },
  button: {
    width: '100%',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginVertical: 5,
  },
  continueButton: {
    backgroundColor: 'orange',
    marginTop: 80,
  },
  buttonText: {
    color: 'black',
    fontWeight: '600',
    fontSize: 17,
  },
})

export default PhoneSignup;