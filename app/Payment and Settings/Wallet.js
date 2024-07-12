import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const WalletScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.navBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.navText} >←</Text>
        </TouchableOpacity>
        <Text style={styles.navTitle}>Payment</Text>
        </View>
      <View style={styles.card}>
        <Text style={styles.balanceText}>GHS 0</Text>
        <Text style={styles.balanceUnavailable}>
          Sprint balance
        </Text>
      </View>
      <View style={styles.questions}>
        <Text style={styles.header}>Payment Methods</Text>
      </View>
      <View style={styles.paymentMethods}>
        <TouchableOpacity style={styles.methodButton}>
          <Text style={styles.methodText}>+ Cash deposit</Text>
        </TouchableOpacity>
        <View style={styles.line} />
        <TouchableOpacity style={styles.methodButton}>
          <Text style={styles.methodText}>+ Add debit/credit card</Text>
        </TouchableOpacity><View style={styles.line} />
        <TouchableOpacity style={styles.methodButton}>
          <Text style={styles.methodText}>+ MoMo</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.HistoryButton}>
              <Text style={styles.buttonText}>Payment History</Text>
            </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 20,
  },
  navText: {
    fontSize: 20,
  },
  navTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  card: {
    backgroundColor: '#f5f5f5',
    padding: 20,
    margin: 10,
    borderRadius: 20,
    width: '90%',
    marginLeft: 20,
  },
  balanceText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'orange',
  },
  balanceUnavailable: {
    fontSize: 16,
    color: '#888',
    marginTop: 5,
  },
  questions: {
    padding: 10,
  },
  header: {
    fontSize: 25,
    fontWeight: '700',
    marginTop: 20,
    marginLeft: 20,
  },
  paymentMethods: {
    padding: 10,
    backgroundColor: '#f5f5f5',
    width: '90%',
    marginLeft: 20,
    borderRadius: 20,
  },
  methodButton: {
    color: 'black',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  methodText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  HistoryButton: {
    backgroundColor: 'orange',
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: 'center',
    width: '90%',
     marginLeft: 20,
     marginTop: 40,
  },
   buttonText: {
    fontSize: 17,
    fontWeight: '600',
    color: 'black',
  },
  line:{
    borderBottomColor: '#888',
    borderBottomWidth: 1,
    alignSelf: 'stretch',
    marginVertical: 5,
  }
});

export default WalletScreen;
