import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SettingsScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style = {styles.safeArea}>
      <View style={styles.container}>
       <View style={styles.navBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.navText} >←</Text>
        </TouchableOpacity>
        <Text style={styles.navTitle}>Settings</Text>
        </View>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Profile</Text>
        <Text style={styles.chevron}></Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Language</Text>
        <Text style={styles.chevron}></Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Date and distances</Text>
        <Text style={styles.chevron}></Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Navigator</Text>
        <Text style={styles.chevron}></Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Rules and terms</Text>
        <Text style={styles.chevron}></Text>
      </TouchableOpacity>
      {/* ... other options ... */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.logoutButton]}>
          <Text style={styles.buttonText}>Log out</Text>
        </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#fff', // or any other background color you prefer
  },
 
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 20,
  },
  navTitle: {
    fontSize:25,
    fontWeight:600,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  optionText: {
    fontSize: 20,
  },
  navText: {
    fontSize: 20,
    fontWeight: 600,
    marginRight: 10
  },
  chevron: {
    fontSize: 18,
  },
  buttonContainer: {
    marginTop: 'auto', // pushes the buttons to the bottom of the screen
  },
  button: {
    padding: 15,
    marginHorizontal: 20,
    marginBottom: 10,
    borderRadius: 5,
  },
  logoutButton: {
    backgroundColor: 'orange', 
    borderRadius: 30,
  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SettingsScreen;
