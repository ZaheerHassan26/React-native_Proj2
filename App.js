import {StyleSheet, Text, View} from 'react-native';
import React from 'react';



import {Navigation} from './android/app/Navigation/Navigation';



export default function App() {
  return (
    <View style={{flex: 1}}>
      <Navigation/>
    </View>
  );
}

const styles = StyleSheet.create({});
