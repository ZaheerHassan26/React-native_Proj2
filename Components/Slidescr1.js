import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import SlideComponent from './SlideComponent';
import {useNavigation} from '@react-navigation/native';
import SignIn from './SignIn';
import Skip from './Skip';

export default function Slidescr1() {
  // const navigation = useNavigation();
  return (
    <View style={{flex:1,backgroundColor: '#FFFFFF'}}>
       <Skip />
      <View style={{alignSelf: 'center'}}>
        <SlideComponent
          Image3={require('../app/src/imag/Image1.png')}
          text={'Store credits in one place'}
          desc={
            'After returning your item, open the app and get your store credit downloaded into your app.'
          }
        />
      </View>
      <View style={{top: 140}}>
        {/* <SignIn
          handleEvent={() => {
           navigation.navigate('Signin')
          }} */}
        {/* /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
