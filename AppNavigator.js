import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from './screen/Splash/Splash';
import Home from './screen/Auth/Home';
import LoginScreen from './screen/AuthUser/Login';
import SignupScreen from './screen/AuthUser/Signup';
import ForgetScreen from './screen/AuthUser/ForgetPassword';
import ResetPassScreen from './screen/AuthUser/ResetPassword';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Forget"
          component={ForgetScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ResetPass"
          component={ResetPassScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
