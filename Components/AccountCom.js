import {StyleSheet, Text, View, StatusBar, TextInput} from 'react-native';
import React from 'react';

export default function AccountCom({Detail}) {
  return (
    <View>
      <StatusBar
        backgroundColor={'#FFE3E4'}
        barStyle={'dark-content'}>
          
        </StatusBar>
      <View style={{top: 20, left: 20, paddingBottom: 60}}>
        <View style={{flexDirection:"row"}}>

        <Text
          style={{
            color: '#231F20',
            paddingBottom: 9,
            fontSize: 28,
            fontFamily: ' Sora-Bold',
          }}>
          Re-Place
        </Text>
        <View
          style={{
            height: 5,
            top: 25,
            left: 3,
            width: 5,
            backgroundColor: '#EE7192',
          }}></View>
          </View>
        <Text
          style={{
            color: '#231F20',
            fontSize: 20,
            fontFamily: ' Sora-Regular',
          }}>
          {Detail}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
