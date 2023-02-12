import {StyleSheet, Text, View,Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomScreen1 from '../../bottom/Bottom';
import User from '../../bottom/User';
import Icon from 'react-native-vector-icons/AntDesign';

const Bottom = createBottomTabNavigator();

const Features = () => {
  return (
    <Bottom.Navigator>
      <Bottom.Screen
        name="Profile"
        component={BottomScreen1}
        options={{headerShown: false}}
      />
      <Bottom.Screen
        name="Cart"
        component={User}
        options={{
          headerShown: false,
          tabBarIcon: (tabInfo) => {
            return {
                // <Image source={require("")} />
            }
            
          },
        }}
      />
    </Bottom.Navigator>
  );
};

export default Features;

const styles = StyleSheet.create({});
