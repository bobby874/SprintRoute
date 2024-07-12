import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const SuccessMessage = () => {
    const navigation = useNavigation();
    const handleHomePagePress = () => {
        navigation.navigate(); 
    };
    return (
        <View style={styles.body}>
               <Text style={styles.header}>Congratulations!</Text>
                <Text style={styles.message}>You have been successfully verified</Text>
                <TouchableOpacity style={[styles.button, styles.continue]} onPress={handleHomePagePress}>
                    <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        fontFamily: 'Arial',
        backgroundColor: '#f5f5f5',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontWeight: '600',
        fontSize: 35,
        textAlign: 'center',
    },
    button: {
        display: 'block',
        width: '80%',
        padding: 15,
        borderRadius: 30,
        color: 'black',
        backgroundColor: 'orange',
        cursor: 'pointer',
        marginBottom: 10,
        fontSize: 17,
        fontFamily: 'Trebuchet MS',
    },
    continue: {
        backgroundColor: 'orange',
        color: 'black',
        fontWeight: '600',
    },
    buttonText: {
        color: 'black',
        fontSize: 20,
        fontWeight: 600,
        textAlign: 'center',
        fontFamily: 'Trebuchet MS',
    },
    message: {
        fontSize: 12,
        color: '#666',
        textAlign: 'center',
        marginBottom: 40,
    },
    logo:{
      flex: 1,
      height:50,
      width: 50
    }
});

export default SuccessMessage;