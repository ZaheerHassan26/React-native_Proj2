import {
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Keyboard,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

import AccountCom from '../../Components/AccountCom';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import * as yup from 'yup';
import {Formik} from 'formik';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function Createacc({navigation}) {
  const [Account, setAccount] = useState([]);

  const reviewSchema = yup.object({
    fullname: yup.string().required().min(10),
    Phone: yup.number().required(),
    email: yup.string().email().required(),
    pass: yup.string().required().min(6).max(15),
    Cpass: yup.string().required().min(6).max(15),
  });

  const initialValues = {
    fullname: '',
    Phone: '',
    email: '',
    pass: '',
    Cpass: '',
  };
  const [showpass, setShowpass] = useState(true);
  const [conpass, setConpass] = useState(true);
  const [setcond, setSetcond] = useState(false);

  return (
    <View style={{backgroundColor: '#FFE3E4', flex: 1}}>
      <AccountCom Detail={'Sign up to your account.'} />
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: '#FFFFFF',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          paddingTop: 20,
        }}>
        <View style={{paddingBottom: 20}}>
          <Formik
            initialValues={initialValues}
            validationSchema={reviewSchema}
            onSubmit={values => {
              setAccount(values);
              console.log(Account);
            }}>
            {props => (
              <View>
                <TextInput
                  style={styles.Name}
                  placeholder="Full Name"
                  placeholderTextColor={'#969696'}
                  onChangeText={props.handleChange('fullname')}
                  value={props.values.fullname}
                />
                <Text
                  style={{
                    color: 'red',
                    fontSize: 12,
                    fontFamily: ' Sora-Regular',
                    marginLeft: 30,
                    width: 336,
                    bottom: 10,
                  }}>
                  {props.touched.fullname && props.errors.fullname}
                </Text>
                <TextInput
                  style={styles.phoneno}
                  placeholder="Phone Number"
                  keyboardType="numeric"
                  placeholderTextColor={'#969696'}
                  onChangeText={props.handleChange('Phone')}
                  value={props.values.Phone}
                />
                <Text
                  style={{
                    color: 'red',
                    fontSize: 12,
                    fontFamily: ' Sora-Regular',
                    marginLeft: 30,
                    width: 336,
                    bottom: 10,
                  }}>
                  {props.touched.Phone && props.errors.Phone}
                </Text>
                <TextInput
                  style={[styles.email]}
                  placeholder="Email Address"
                  placeholderTextColor={'#969696'}
                  onChangeText={props.handleChange('email')}
                  value={props.values.email}
                />
                <Text
                  style={{
                    color: 'red',
                    fontSize: 12,
                    fontFamily: ' Sora-Regular',
                    marginTop: 5,
                    marginLeft: 30,
                    width: 336,
                    bottom: 2,
                  }}>
                  {props.touched.email && props.errors.email}
                </Text>
                <TextInput
                  secureTextEntry={showpass}
                  style={styles.pass}
                  maxLength={15}
                  placeholder="password"
                  placeholderTextColor={'#969696'}
                  onChangeText={props.handleChange('pass')}
                  value={props.values.pass}
                />
                <Text
                  style={{
                    color: 'red',
                    marginTop: 1,
                    fontSize: 12,
                    fontFamily: ' Sora-Regular',
                    marginLeft: 30,
                    width: 336,
                  }}>
                  {props.touched.pass && props.errors.pass}
                </Text>
                <Ionicons
                  onPress={() => setShowpass(!showpass)}
                  style={{
                    width: 30,
                    alignSelf: 'flex-end',
                    right: '13%',
                    bottom: '10.5%',
                  }}
                  size={23}
                  name={showpass ? 'eye' : 'eye-off'}
                />
                <TextInput
                  secureTextEntry={conpass}
                  style={styles.confpass}
                  maxLength={15}
                  placeholder=" Confirm Password"
                  placeholderTextColor={'#969696'}
                  onChangeText={props.handleChange('Cpass')}
                  value={props.values.Cpass}
                />
                <Text
                  style={{
                    color: 'red',
                    fontSize: 12,
                    fontFamily: ' Sora-Regular',
                    marginLeft: 30,
                    width: 336,
                    bottom: 10,
                  }}>
                  {props.errors.Cpass}
                </Text>
                <Ionicons
                  onPress={() => setConpass(!conpass)}
                  style={{
                    width: 30,
                    alignSelf: 'flex-end',
                    right: '13%',
                    bottom: '12.5%',
                  }}
                  size={23}
                  name={conpass ? 'eye' : 'eye-off'}
                />

                <TouchableOpacity
                  style={{
                    padding: 15,
                    width: 336,
                    marginTop: 50,
                    borderRadius: 100,
                    alignSelf: 'center',
                    backgroundColor: '#FD9BA7',
                  }}
                  onPress={props.handleSubmit}>
                  <Text
                    style={{
                      fontFamily: ' Sora-Regular',
                      textAlign: 'center',
                      fontSize: 16,
                      color: '#FFFFFF',
                    }}>
                    Sign up
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
          <View style={{flexDirection: 'row', bottom: '30%'}}>
            <MaterialCommunityIcons
              onPress={() => {
                setSetcond(!setcond);
              }}
              style={{color: 'grey', left: 20}}
              name={setcond ? 'checkbox-marked' : 'checkbox-blank-outline'}
              size={25}
            />
            <View
              style={{
                flexDirection: 'row',
                left: 30,
                width: 130,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontFamily: ' Sora-Regular',
                    color: '#111111',
                    fontSize: 18,
                  }}>
                  I have read
                </Text>

                <Text
                  style={{
                    fontFamily: ' Sora-Regular',
                    color: '#EA7A89',
                    left: 3,
                    fontSize: 18,
                  }}>
                  Terms and Conditions
                </Text>

                <View style={{flexDirection: 'column', flexBasis: '90%'}}>
                  <Text
                    style={{
                      fontFamily: ' Sora-Regular',
                      color: '#111111',
                      left: 3,
                      fontSize: 18,
                    }}>
                    and
                  </Text>

                  <Text
                    style={{
                      justifyContent: 'flex-start',
                      fontFamily: ' Sora-Regular',
                      right: '220%',
                      color: '#EA7A89',
                      fontSize: 18,
                    }}>
                    Privacy Policy
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{marginTop: '10%', flexBasis: '20%'}}></View>

          <Text
            style={{
              bottom: 10,
              textAlign: 'center',
              fontSize: 16,
              fontFamily: ' Sora-Regular',
              color: '#252525',
            }}>
            Or sign in with
          </Text>
          <View style={{flexDirection: 'row', top: 10, alignSelf: 'center'}}>
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
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              marginTop: '9%',
            }}>
            <Text
              style={{
                color: '#111111',
                fontFamily: ' Sora-Regular',
                fontSize: 16,
              }}>
              Already a member?
            </Text>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('Signin')}>
              <Text
                style={{
                  marginLeft: 6,
                  color: '#EA7A89',
                  fontFamily: ' Sora-Regular',
                  fontSize: 16,
                  paddingBottom: 20,
                }}>
                Sign in
              </Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
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
  Name: {
    marginTop: 18,
    fontFamily: ' Sora-Regular',
    backgroundColor: '#F5F5F5',
    width: 336,
    height: 46,
    fontSize: 14,
    marginBottom: 16,
    alignSelf: 'center',
    borderRadius: 50,
    paddingBottom: 10,
    paddingLeft: 20,
  },
  phoneno: {
    fontFamily: ' Sora-Regular',
    backgroundColor: '#F5F5F5',
    width: 336,
    height: 46,
    fontSize: 14,
    marginBottom: 14,
    alignSelf: 'center',
    borderRadius: 50,
    paddingBottom: 10,
    paddingLeft: 20,
  },
  email: {
    fontFamily: ' Sora-Regular',
    backgroundColor: '#F5F5F5',
    width: 336,
    height: 46,
    fontSize: 14,
    marginTop: 2,
    alignSelf: 'center',
    borderRadius: 50,
    paddingBottom: 10,
    paddingLeft: 20,
  },
  pass: {
    marginTop: 12,
    fontFamily: ' Sora-Regular',
    backgroundColor: '#F5F5F5',
    width: 336,
    bottom: 5,
    height: 46,
    fontSize: 14,
    alignSelf: 'center',
    borderRadius: 50,
    paddingLeft: 20,
  },
  confpass: {
    bottom: 16,
    fontFamily: ' Sora-Regular',
    backgroundColor: '#F5F5F5',
    width: 336,
    height: 46,
    fontSize: 14,
    alignSelf: 'center',
    borderRadius: 50,
    paddingBottom: 10,
    paddingLeft: 20,
  },
});
