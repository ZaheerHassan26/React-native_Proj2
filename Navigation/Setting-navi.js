import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Setting from '../src/Setting';
import Archived from '../src/Archived';
import Mystore from '../src/Mystore';
import Storepay from '../src/Storepay';
import Paydetail from '../src/Paydetail';
import TC from '../src/T.C';
import PP from '../src/PP';
import Chpass from '../src/Chpass';
import Feedback from '../src/Feedback';

const SettingNav = createNativeStackNavigator();

export default function Settingnavi() {
  return (
    <SettingNav.Navigator screenOptions={{headerShown: false}}>
      <SettingNav.Screen name="Setting" component={Setting} />
      <SettingNav.Screen name="Archieved" component={Archived} />
      <SettingNav.Screen name="Mystore" component={Mystore} />
      <SettingNav.Screen name="Storepay" component={Storepay} />
      <SettingNav.Screen name="Paydetail" component={Paydetail} />
      <SettingNav.Screen name="Tc" component={TC} />
      <SettingNav.Screen name="PP" component={PP} />
      <SettingNav.Screen name="chpass" component={Chpass} />
      <SettingNav.Screen name="feedback" component={Feedback} />
    </SettingNav.Navigator>
  );
}

const styles = StyleSheet.create({});
