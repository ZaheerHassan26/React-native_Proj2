import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Market from '../src/Market';
import Storedetail from '../src/Storedetail';

const MarketNav = createNativeStackNavigator();

export default function Marketnavi() {
  return (
    <MarketNav.Navigator>
        <MarketNav.Screen name="Market" component={Market}/>
        <MarketNav.Screen name="Storedetail" component={Storedetail}/>


    </MarketNav.Navigator>
  )
}

const styles = StyleSheet.create({})