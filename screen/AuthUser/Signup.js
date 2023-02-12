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

const SignupScreen = () => {
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');

  return (
    <View style={styles.maincontainer}>
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/user.png')}
          style={styles.logo}
        />
        <TextInput
          style={styles.input}
          placeholder="First Name"
          onChangeText={value => setfirstName(value)}
          value={firstName}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          onChangeText={value => setlastName(value)}
          value={lastName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={value => setfirstName(value)}
          value={firstName}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={value => setlastName(value)}
          value={lastName}
        />
        <Text
          style={{
            color: '#fff',
            alignSelf: 'flex-end',
            fontWeight: '500',
            paddingEnd: 5,
            textDecorationLine: 'underline',
          }}>
          Forget Password?
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            alert(`firstName: ${firstName}\nlastName: ${lastName}`)
          }>
          <Text style={styles.buttonText}>Signup</Text>
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

export default SignupScreen;
