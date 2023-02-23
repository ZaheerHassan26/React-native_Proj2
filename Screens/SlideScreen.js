import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React from 'react';

import Onboarding from 'react-native-onboarding-swiper';

import Swiper from 'react-native-swiper';
import Slidescr2 from '../../Components/Slidescr2';
import Slidescr1 from '../../Components/Slidescr1';
import Slidescr3 from '../../Components/Slidescr3';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SignIn from '../../Components/SignIn';



export default function SlideScreen({navigation}) {
  return (
    <ScrollView style={{paddingBottom:20,backgroundColor:"white"}}>
      <Swiper
        activeDotColor="#FD9AA6 "
        activeDotStyle={{width: 11, height: 11,marginBottom:100}}
        dotStyle={{backgroundColor: '#FD9AA6',marginBottom:100 }}
        showsButtons={true}
        prevButton={
          <View style={{}}>
            <AntDesign
              size={28}
              name={'left'}
              style={{color: '#FD9AA7', marginBottom: 620, }}
            />
          </View>
        }
        nextButton={
          <Text
            style={{
              fontFamily: ' Sora-Regular',
              textAlign: 'center',
              backgroundColor: '#FD9BA7',
              borderRadius: 100,
              width: 225,
              height: 46,
              marginRight:70,
              marginTop: 650,
              fontSize: 16,
              paddingTop: 10,
              color: 'white',
            }}>
            Next
          </Text>
        }>
        <Slidescr1 />
        <Slidescr2 />
        <Slidescr3 />
      </Swiper>
      <View style={{marginTop:61,paddingBottom:20}}>
        <SignIn handleEvent={()=>navigation.navigate('Signin')}/>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cont: {},
  text: {
    top: 40,
    color: '#FD9BA7',
    fontSize: 25,
    fontWeight: '400',
    textAlign: 'right',
    right: 30,
  },
});
