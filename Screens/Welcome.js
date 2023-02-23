import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  StatusBar,
} from 'react-native';
import React from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';

import SignIn from '../../Components/SignIn';
import {ScrollView} from 'react-native';

export default function Welcome({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <StatusBar
        backgroundColor={'white'}
        barStyle={'dark-content'}></StatusBar>

      <ScrollView>
        <View
          style={{
            padding: 10,
            width: 50,
            height: 50,
            top: '4%',
            left: '3%',
          }}>
          <AntDesign
            onPress={() => {
              navigation.goBack();
            }}
            name={'left'}
            size={25}
            color={'#FD9BA7'}
          />
        </View>
        <View>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <Text
              style={{
                color: '#231F20',
                top: '15%',
                fontSize: 30,
                justifyContent: 'center',
                textAlign: 'center',
                fontFamily: 'Sora-Medium',
              }}>
              Re-Place
            </Text>
            <View
              style={{
                height: 5,
                top: '22%',
                left: 3,
                width: 5,
                backgroundColor: '#EE7192',
              }}></View>
          </View>
          <Text
            style={{
              fontFamily: ' Sora-Medium',
              marginTop:"35%",
              color: '#231F20',
              fontSize: 40,
              justifyContent: 'center',
              textAlign: 'center',
            }}>
            Welcome
          </Text>
        </View>
        <View style={{marginTop:"50%"}}>
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate('createaccount');
            }}>
            <Text
              style={{
                height: 46,
                bottom: 20,
                borderRadius: 100,
                textAlign: 'center',
                alignSelf: 'center',
                width: 225,
                backgroundColor: '#FD9BA7',
                fontFamily: ' Sora-Regular',
                fontSize: 16,
                paddingTop: 10,
                color: '#FFFFFF',
              }}>
              Sign up as user
            </Text>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback>
            <Text
              style={{
                height: 46,
                borderRadius: 100,
                textAlign: 'center',
                alignSelf: 'center',
                width: 225,
                backgroundColor: '#FD9BA7',
                fontFamily: ' Sora-Regular',
                fontSize: 16,
                paddingTop: 10,
                color: '#FFFFFF',
              }}>
              Sign up as store
            </Text>
          </TouchableWithoutFeedback>
        </View>
        <View style={{marginTop: '20%'}}>
          <SignIn
            handleEvent={() => {
              navigation.navigate('Signin');
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    top: 100,
  },
});
