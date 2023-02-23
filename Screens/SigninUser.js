import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {Formik} from 'formik';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AccountCom from '../../Components/AccountCom';

export default function SigninUser({navigation}) {
  const [showpass, setShowpass] = useState(true);
  return (
    <View style={{backgroundColor: '#FFE3E4', flex: 1}}>
      <AccountCom Detail={'Sign in to your account.'} />
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: '#FFFFFF',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}>
        <View style={{}}>
          <TextInput
            style={styles.input}
            placeholder="email-address"
            placeholderTextColor={'#969696'}
          />
          <TextInput
            secureTextEntry={showpass}
            style={styles.input2}
            placeholder="password"
            placeholderTextColor={'#969696'}
          />
          <Ionicons
            onPress={() => setShowpass(!showpass)}
            style={{alignSelf:"flex-end",marginRight:36.57, top: 13, width: 30}}
            size={23}
            name={showpass ? 'eye' : 'eye-off'}
          />
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Forgetpass')}>
            <Text
              style={{
                textAlign: 'right',
                right: '10.5%',
                fontFamily: ' Sora-Regular',
                marginTop: '12%',
                color: '#FC95A3',
                fontSize: 14,
              }}>
              Forgot Password
            </Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Menubar')}>
            <Text
              style={{
                marginTop: 88,
                height: 46,
                fontFamily: ' Sora-Regular',
                borderRadius: 100,
                textAlign: 'center',
                alignSelf: 'center',
                width: 336,
                backgroundColor: '#FD9BA7',
                fontSize: 16,
                paddingTop: 10,
                color: '#FFFFFF',
              }}>
              Sign in
            </Text>
          </TouchableWithoutFeedback>

          <Text
            style={{
              marginTop: 153,
              textAlign: 'center',
              fontSize: 16,
              fontFamily: ' Sora-Regular',
              color: '#252525',
            }}>
            Or sign in with
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 26,
              alignSelf: 'center',
            }}>
            <AntDesign
              name={'google'}
              size={20}
              color={'#FFFFFF'}
              style={styles.icon}
            />
            <EvilIcons
              name={'sc-facebook'}
              size={32}
              color={'#FFFFFF'}
              style={styles.icon2}
            />
            <Foundation
              name={'social-apple'}
              color={'#FFFFFF'}
              size={24}
              style={styles.icon2}
            />
          </View>
          <View style={{flexDirection: 'row', alignSelf: 'center',marginTop:24,paddingBottom:30}}>
            <Text
              style={{
                color: '#111111',
                paddingBottom: 20,
                fontFamily: ' Sora-Regular',
                fontSize: 16,
              }}>
              Don’t have an account?
            </Text>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('createaccount')}>
              <Text
                style={{
                  paddingBottom: 20,
                  marginLeft: 6,
                  color: '#EA7A89',
                  fontFamily: ' Sora-Regular',
                  fontSize: 16,
                }}>
                Sign up
              </Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    top: 30,
    backgroundColor: '#F5F5F5',
    width: 336,
    height: 46,
    fontFamily: ' Sora-Regular',
    fontSize: 18,
    alignSelf: 'center',
    borderRadius: 50,
    paddingBottom: 10,
    paddingLeft: 20,
  },
  input2: {
    top: 50,
    fontFamily: ' Sora-Regular',
    backgroundColor: '#F5F5F5',
    width: 336,
    height: 46,
    fontSize: 18,
    alignSelf: 'center',
    borderRadius: 50,
    paddingBottom: 10,
    paddingLeft: 20,
  },
  icon: {
    paddingTop: 13,
    backgroundColor: '#515151',
    width: 50,
    height: 50,
    borderRadius: 15,
    textAlign: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  icon2: {
    paddingTop: 11,
    backgroundColor: '#515151',
    width: 50,
    height: 50,
    borderRadius: 15,
    marginRight: 10,
    textAlign: 'center',
    justifyContent: 'center',
  },
});
