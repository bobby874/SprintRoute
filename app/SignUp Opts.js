import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import PhoneSignup from './PhoneSignUp';

const SignUpOptions = () => {
    const navigation = useNavigation();
    const handleSignupPress = () => {
        navigation.navigate(PhoneSignup); 
      };

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.back}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backArrow}>
                    <FontAwesomeIcon icon={faAngleLeft} size={24} color="#000" />
                </TouchableOpacity>
            </ SafeAreaView>
            <Text style={styles.title}>Create an account</Text>
            <TouchableOpacity style={[styles.button, styles.continueButton]} onPress={handleSignupPress}>
                <Text style={styles.continueButtonText}>Continue with Phone</Text>
            </TouchableOpacity>
            <View style={styles.divider}>
                <View style={styles.line}></View>
                <Text style={styles.orText}>OR</Text>
                <View style={styles.line}></View>
            </View>
            <TouchableOpacity style={[styles.button, styles.googleButton]}>
                <Text style={styles.googleButtonText}>Continue with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.appleButton]}>
                <Text style={styles.appleButtonText}>Continue with Apple ID</Text>
            </TouchableOpacity>
            <Text style={styles.terms}>Terms & Conditions and Privacy Policy.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        fontFamily: 'Arial',
        backgroundColor: '#f5f5f5',
        flex: 1,
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
        fontSize: 22,
        marginBottom: 40,
    },
    button: {
        width: '100%',
        padding: 15,
        borderRadius: 30,
        marginBottom: 10,
        alignItems: 'center',
    },
    continueButton: {
        backgroundColor: 'orange',
    },
    continueButtonText: {
        color: 'black',
        fontWeight: '600',
        fontSize: 17,
    },
    divider: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: 'black',
    },
    orText: {
        marginHorizontal: 10,
        fontWeight: '600',
    },
    googleButton: {
        backgroundColor: 'lightgray',
    },
    googleButtonText: {
        color: 'black',
        fontWeight: '600',
        fontSize: 17,
    },
    appleButton: {
        backgroundColor: '#1877F2',
    },
    appleButtonText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 17,
    },
    terms: {
        fontSize: 12,
        color: '#666',
        textAlign: 'center',
        marginTop: 100,
    },
});

export default SignUpOptions;