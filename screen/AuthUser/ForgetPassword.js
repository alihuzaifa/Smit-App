import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const ForgetScreen = () => {
  const [email, setEmail] = useState('');

  return (
    <View style={styles.maincontainer}>
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/lock.png')}
          style={styles.logo}
        />
        <TextInput
          style={styles.input}
          placeholder="Your Email Address"
          keyboardType="email-address"
          onChangeText={value => setEmail(value)}
          value={email}
        />

        <TouchableOpacity style={styles.button} onPress={() => alert('ALLAH')}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1d3557',
  },
  container: {
    alignItems: 'center',
  },
  logo: {
    width: 128,
    height: 128,
    marginBottom: 32,
    tintColor: '#fff',
  },
  input: {
    width: responsiveWidth(90),
    height: responsiveHeight(8),
    paddingHorizontal: 16,
    marginVertical: 8,
    backgroundColor: 'white',
    fontSize: 16,
    borderRadius: 8,
  },
  button: {
    width: responsiveWidth(90),
    height: responsiveHeight(8),
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: '#1d3557',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default ForgetScreen;
