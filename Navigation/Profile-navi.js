import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '../src/Profile';
import Editprofile from '../src/Editprofile';
const ProfileNav = createNativeStackNavigator();

export default function Profilenavi() {
  return (
    <ProfileNav.Navigator screenOptions={{headerShown: false}}>
      <ProfileNav.Screen name="Profile" component={Profile} />
      <ProfileNav.Screen name="Profilemodel" component={Editprofile} />
    </ProfileNav.Navigator>
  );
}

const styles = StyleSheet.create({});
