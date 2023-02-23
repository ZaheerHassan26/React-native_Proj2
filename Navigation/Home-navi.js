import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AccountHome from '../src/AccountHome';
import AddRecipt from '../src/AddRecipt';
import Recipt from '../src/Recipt';
import SaveRecipt from '../src/SaveRecipt';
const HomeNav = createNativeStackNavigator();

export default function Homenavi() {
  return (
    <HomeNav.Navigator screenOptions={{headerShown: false}}>
      <HomeNav.Screen name="Home" component={AccountHome} />
      <HomeNav.Screen name="AddRecipt" component={AddRecipt} />
      <HomeNav.Screen name="Recipt" component={Recipt} />
      <HomeNav.Screen name="SaveRecipt" component={SaveRecipt} />
    </HomeNav.Navigator>
  );
}

const styles = StyleSheet.create({});
