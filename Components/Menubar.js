import {StyleSheet, Text, View, KeyboardAvoidingView} from 'react-native';
import React, {useState} from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AccountHome from '../app/src/AccountHome';
import Market from '../app/src/Market';
import Profile from '../app/src/Profile';
import Setting from '../app/src/Setting';
const Tab = createBottomTabNavigator();

export default function Menubar() {
  return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused}) => {
            let iconName;
            if (route.name == 'Home') {
              iconName = 'home';
            } else if (route.name == 'Profile') {
              iconName = 'person';
            } else if (route.name == 'Setting') {
              iconName = 'settings';
            } else if (route.name == 'Market') {
              iconName = 'store';
            }

            return (
              <>
                {iconName !== 'store' ? (
                  <Ionicons
                    size={30}
                    style={{color: focused ? '#EA7A89' : '#FFCCD3', bottom: 5}}
                    name={iconName}
                  />
                ) : (
                  <FontAwesome5
                    name={iconName}
                    size={30}
                    style={{color: focused ? '#EA7A89' : '#FFCCD3', bottom: 5}}
                  />
                )}
              </>
            );
          },
          tabBarLabel: ({focused, size, color}) => {
            let LabelName;
            if (route.name == 'Home') {
              LabelName = 'Home';
              size = size + 6;
              color = focused ? '#EA7A89' : '#FFCCD3';
            } else if (route.name == 'Market') {
              (LabelName = 'Market'), (size = size + 6);
            } else if (route.name == 'Profile') {
              (LabelName = 'Profile'), (size = size + 6);
            } else if (route.name == 'Setting') {
              (LabelName = 'Setting'), (size = size + 6);
            }
            return (
              <Text style={{color: color, bottom: 10, left: 2}}>
                {LabelName}
              </Text>
            );
          },
          tabBarActiveTintColor: '#EA7A89',
          tabBarInactiveTintColor: '#FFCCD3',
          tabBarHideOnKeyboard: true,
          tabBarStyle: {backgroundColor: 'white', height: 70},
        })}>
        <Tab.Screen name="Home" component={AccountHome} />
        <Tab.Screen name="Market" component={Market} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Setting" component={Setting} />
      </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
