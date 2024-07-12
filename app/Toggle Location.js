import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Options from './Options'

const Location = () => {
    const navigation = useNavigation();

        const handleOptionsPress = () => {
            navigation.navigate(Options); 
        };

    return (
            <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}>Enable Your Location?</Text>
                <Text style={styles.subtitle}>Turn on location to start finding rides around you</Text>
            </View>
            <TouchableOpacity style={[styles.button, styles.verifyButton]}>
                <Text style={styles.buttonText}>Turn On</Text>
            </TouchableOpacity>
            <View style={styles.nav}>
                <Text style={styles.skip} onPress={handleOptionsPress}>Skip</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    
    skip: {
        fontWeight: '600',
        fontSize: 18,
        color: 'grey',
        textAlign: 'center',
    },
    title: {
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 40,
    },
    titleText: {
        fontSize: 18,
        lineHeight: 15,
        textAlign: 'center',
    },
    subtitle: {
        textAlign: 'center',
    },
    button: {
        width: '100%',
        padding: 15,
        borderRadius: 30,
        alignItems: 'center',
        marginBottom: 10,
    },
    verifyButton: {
        backgroundColor: 'orange',
    },
    buttonText: {
        color: 'black',
        fontWeight: '700',
        fontSize: 18,
    },
});

export default App;