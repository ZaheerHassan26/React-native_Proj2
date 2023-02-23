import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import SlideComponent from './SlideComponent';
import SignIn from './SignIn';
import Skip from './Skip';

export default function Slidescr3() {
  // const navigation = useNavigation();
  return (
    <View style={{ flex:1,backgroundColor: '#FFFFFF'}}>
        <Skip />
      <View style={{alignSelf:'center'}}>

      <SlideComponent
        Image2={require('../app/src/imag/Image3.png')}
        text={'Pay directly with Re-place app'}
        desc={
          ' When you go back to the store, open your app, check for your store credit and use it.'
        }
      />
      </View>
      <View style={{top: 150}}> 
        {/* <SignIn
          handleEvent={() => {
            navigation.navigate('Signin');
          }} */}
        {/* /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
