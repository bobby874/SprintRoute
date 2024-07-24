import React, { useState, useEffect } from 'react';
import { View,Image, StyleSheet } from 'react-native';
import Options from './Options'

const AppDemo = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) {
    return <Options />;
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.jpg')} 
        style={styles.logoImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0eee6',
  },
  logoImage: {
    width: 4000, 
    height: 700, 
    resizeMode: 'contain', 
  },
});

export default AppDemo;
