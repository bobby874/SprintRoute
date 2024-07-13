import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import Verify from './OTP Verification Prompt'

const Demo = () => {
    const navigation = useNavigation();
  
    const handleVerifyPress = () => {
      navigation.navigate(Verify); 
    };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.back}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backArrow}>
            <FontAwesomeIcon icon={faAngleLeft} size={24} color="#000" />
          </TouchableOpacity>
      </ SafeAreaView>
      <Text style={styles.header}>Log into your account</Text>
      <View style={styles.inputGroup}>
        <TextInput
          style={[styles.input, styles.ccode]}
          placeholder="+"
          keyboardType="phone-pad"
        />
        <TextInput
          style={[styles.input, styles.number]}
          placeholder="phone"
          keyboardType="phone-pad"
          required
        />
      </View>
      <TouchableOpacity style={[styles.button, styles.continueButton]} onPress={handleVerifyPress}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
      <View style={styles.divider}>
        <View style={styles.line} />
        <Text style={styles.dividerText}>OR</Text>
        <View style={styles.line} />
      </View>
      <TouchableOpacity style={[styles.button, styles.googleButton]}>
        <Text style={styles.buttonText}>Continue with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.AppleButton]}>
        <Text style={styles.buttonText}>Continue with Apple ID</Text>
      </TouchableOpacity>
      <Text style={styles.terms}>
        Terms & Conditions and Privacy Policy.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0eee6',
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
  header: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: 50,
  },
  inputGroup: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  ccode: {
    width: '20%',
    marginRight: 5,
  },
  number: {
    width: '75%',
  },
  button: {
    width: '100%',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 10,
  },
  continueButton: {
    backgroundColor: 'orange',
    marginTop: 5,
  },
  googleButton: {
    backgroundColor: 'lightgray',
    marginTop: 20,
  },
  AppleButton: {
    backgroundColor: '#1877F2',
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '600',
    color: 'black',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  line: {
    flexGrow: 1,
    height: 1,
    backgroundColor: 'black',
  },
  dividerText: {
    marginHorizontal: 10,
  },
  terms: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginTop: 100,
  },
})

export default Demo;