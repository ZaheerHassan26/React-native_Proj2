import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Chpass({navigation}) {
  const [showPass, setShowPass] = useState({
    pass1: true,
    pass2: true,
    pass3: true,
  });
  const {pass1, pass2, pass3} = showPass;

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar
        backgroundColor={'white'}
        barStyle={'dark-content'}></StatusBar>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          top: '4%',
          right: '4.9%',
        }}>
        <View>
          <AntDesign
            onPress={() => {
              navigation.goBack();
            }}
            name="left"
            size={25}
            color="#B24D5B"
            style={{top: '20%', right: '20%'}}
          />
        </View>
        <View>
          <Text
            style={{
              color: '#1E1E1E',
              fontFamily: 'Sora-Regular',
              fontSize: 20,
            }}>
            Change Password
          </Text>
        </View>
      </View>
      <View
        style={{
          paddingBottom: 30,
          borderTopWidth: 2,
          borderTopColor: '#F0F0F0',
          width: '100%',
          alignSelf: 'center',
          top: '4%',
        }}></View>
      <View style={{top: 40}}>
        <TextInput
          secureTextEntry={pass1}
          style={styles.input2}
          maxLength={15}
          placeholder="Old Password"
          placeholderTextColor={'#969696'}
        />
        <Ionicons
          onPress={() =>
            setShowPass(Prev => ({
              ...Prev,
              pass1: false,
            }))
          }
          style={{
            right: '14%',
            alignSelf: 'flex-end',
            bottom: 56,
          }}
          size={23}
          name={pass1 ? 'eye' : 'eye-off'}
        />
      </View>
      <View style={{top: 40}}>
        <TextInput
          secureTextEntry={pass2}
          style={styles.input2}
          maxLength={15}
          placeholder="New Password"
          placeholderTextColor={'#969696'}
        />
        <Ionicons
          onPress={() =>
            setShowPass(Prev => ({
              ...Prev,
              pass1: false,
            }))
          }
          style={{right: '14%', alignSelf: 'flex-end', bottom: 56}}
          size={23}
          name={pass2 ?  'eye' : 'eye-off'}
        />
      </View>
      <View style={{top: 40}}>
        <TextInput
          secureTextEntry={pass3}
          style={styles.input2}
          maxLength={15}
          placeholder="Confirm Password"
          placeholderTextColor={'#969696'}
        />
        <Ionicons
          onPress={() =>
            setShowPass(Prev => ({
              ...Prev,
              pass1: false,
            }))
          }
          style={{right: '14%', alignSelf: 'flex-end', bottom: 56}}
          size={23}
          name={pass3 ? 'eye' : 'eye-off'}
        />
      </View>
      <Pressable>
        <Text
          style={{
            backgroundColor: '#EA7A89',
            alignSelf: 'center',
            textAlign: 'center',
            top: 86,
            paddingTop: 9,
            fontFamily: 'Sora-Regular',
            fontSize: 16,
            width: 336,
            color: 'white',
            height: 46,
            borderWidth: 2,
            borderColor: '#EA7A89',
            borderRadius: 100,
          }}>
          Change Password
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  input2: {
    bottom: 19,
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
  input3: {
    bottom: 40,
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
