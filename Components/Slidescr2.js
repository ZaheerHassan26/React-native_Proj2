import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import SlideComponent from './SlideComponent';
import SignIn from './SignIn';
import Skip from './Skip';
export default function Slidescr2() {
  // const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <Skip/>
      <View style={{alignSelf:'center'}}>

        <SlideComponent
          Image4={require('../app/src/imag/Image2.png')}
          text={'Easy to use'}
          desc={'Check in your app the tour store credit is downloaded.'}
        />
      </View>
        <View style={{top: 130}}> 
          {/* <SignIn
          handleEvent={() => {
            navigation.navigate('Signin');
          }}
          /> */}
         </View>
    </View>
  );
}

const styles = StyleSheet.create({});
