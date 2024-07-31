import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';


  const TipsScreen = () => {
  const navigation = useNavigation();
  const handleHomeScreen = () => {
    navigation.navigate('Home');
  };

  const [selectedAmount, setSelectedAmount] = useState(null);

  const amounts = [1, 2, 5];

  const handleAmountPress = (amount) => {
    setSelectedAmount(amount);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.nav}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.navText} >←</Text>
        </TouchableOpacity>
        <Text style={styles.header}>Driver Tips</Text>
      </View>
      </SafeAreaView>
      <View style={styles.card}>
        <Image
          source={require('../../assets/Placeholder.png')}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Gregory Smith</Text>
        <Text style={styles.message}>Wanna add tip for Gregory?</Text>
        <View style={styles.amountContainer}>
          {amounts.map(amount => (
            <TouchableOpacity
              key={amount}
              style={[
                styles.amountButton,
                selectedAmount === amount && styles.selectedAmountButton
              ]}
              onPress={() => handleAmountPress(amount)}
            >
              <Text style={[
                styles.amountText,
                selectedAmount === amount && styles.selectedAmountText
              ]}>
                GHc{amount}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity style={styles.otherAmountButton}>
          <Text style={styles.otherAmountText}>Choose other amount</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.doneButton}>
          <Text style={styles.doneButtonText} onPress={handleHomeScreen}>Done</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.otherAmountButton} onPress={handleHomeScreen}>
          <Text style={styles.otherAmountText}>Maybe Next time</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    paddingTop: 40,
  },
   nav: {
        flexDirection: 'row',
        marginBottom: 100,
        marginRight: 200,
        display: 'flex',
        alignItems: 'center',
    justifyContent: 'center'
    },
  header: {
    fontSize: 25,
    fontWeight: '600',
    fontFamily: 'Trebuchet MS',
  },
  navText: {
    fontSize: 30,
    fontWeight: '600',
    marginRight: 10,
  },
  card: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    color: '#333',
    marginBottom: 30,
  },
  amountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  amountButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    marginHorizontal: 10,
    marginBottom: 20,
  },
  selectedAmountButton: {
    backgroundColor: 'orange',
  },
  amountText: {
    fontSize: 18,
    color: '#333',
  },
  selectedAmountText: {
    color: '#fff',
  },
  otherAmountButton: {
    marginBottom: 20,
  },
  otherAmountText: {
    fontSize: 16,
    color: '#ef4444',
    textDecorationLine: 'underline',
  },
  doneButton: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    backgroundColor: 'orange',
    alignItems: 'center',
    marginBottom: 10,
  },
  doneButtonText: {
    fontSize: 20,
    color: 'black',
    fontWeight: '600'
  },
  maybeNextTimeText: {
    fontSize: 16,
    color: '#333',
  },
});

export default TipsScreen;