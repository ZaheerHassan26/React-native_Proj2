import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  StatusBar,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Feedback({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar
        backgroundColor={'white'}
        barStyle={'dark-content'}></StatusBar>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: '2%',
          right: '7.5%',
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
            Feedback
          </Text>
        </View>
      </View>
      <View
        style={{
          paddingBottom: 30,
          borderTopWidth: 1,
          borderTopColor: '#F0F0F0',
          width: '100%',
          alignSelf: 'center',
          top: '2.5%',
        }}></View>

      <TextInput
        placeholder="Email Address"
        placeholderTextColor={'#969696'}
        style={{
          alignSelf: 'center',
          marginTop: 27,
          paddingLeft: 30,
          fontFamily: 'Sora-Regular',
          fontSize: 14,
          width: 336,
          height: 46,
          borderRadius: 50,
          backgroundColor: '#F5F5F5',
        }}
      />
      <TextInput
        placeholder="Name"
        placeholderTextColor={'#969696'}
        style={{
          alignSelf: 'center',
          paddingLeft: 30,
          fontFamily: 'Sora-Regular',
          fontSize: 14,
          width: 336,
          height: 46,
          borderRadius: 50,
          backgroundColor: '#F5F5F5',
          marginTop: 18,
        }}
      />
      <TextInput
        placeholder="Message..."
        placeholderTextColor={'#969696'}
        style={{
          alignSelf: 'center',
          marginTop: 18,
          paddingLeft: 30,
          paddingBottom: 110,
          fontFamily: 'Sora-Regular',
          fontSize: 14,
          width: 336,
          height: 142,
          borderRadius: 20,
          backgroundColor: '#F5F5F5',
        }}
      />

      <Pressable>
        <Text
          style={{
            backgroundColor: '#EA7A89',
            alignSelf: 'center',
            textAlign: 'center',
            marginTop: 40,
            paddingTop: 8,
            fontFamily: 'Sora-Regular',
            fontSize: 16,
            width: 336,
            color: 'white',
            height: 46,
            borderWidth: 2,
            borderColor: '#EA7A89',
            borderRadius: 100,
          }}>
          Submit
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({});
