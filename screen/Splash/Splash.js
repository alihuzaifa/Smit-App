import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {MotiView, MotiImage} from 'moti';

const Splash = ({navigation}) => {
  const rediect = () => {
    setTimeout(() => {
      navigation.navigate('ResetPass');
    }, 3000);
  };

  useEffect(() => {
    rediect();
  }, []);
  return (
    <View style={styles.container}>
      {/* <Image
        source={require('../../assets/images/greet.png')}
        style={styles.splash}
      /> */}
      <MotiView
        from={{
          scale: 0.1,
        }}
        animate={{scale: 1}}
        transition={{duration: 2000, type: 'timing'}}
        style={{
          width: 300,
          height: 100,
          borderRadius: 10,
          backgroundColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: '#1d3557', fontSize: 30, fontWeight: '500'}}>
          Welcome to Hack
        </Text>
      </MotiView>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1d3557',
  },
  splash: {
    width: 300,
    height: 300,
    tintColor: '#fff',
  },
});
