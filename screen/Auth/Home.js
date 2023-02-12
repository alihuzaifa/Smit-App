import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DrawerNavigator from '../drawer/DrawerNavigator';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainHome from '../drawer/screens/MainHome';
import About from '../drawer/screens/About';
import Services from '../drawer/screens/Services';
import Features from '../drawer/screens/Features';
const Drawer = createDrawerNavigator();
const Home = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="MainHome" component={MainHome} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Services" component={Services} />
      <Drawer.Screen name="Features" component={Features} />
    </Drawer.Navigator>
  );
};

export default Home;

const styles = StyleSheet.create({});
