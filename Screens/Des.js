import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';

export default function Des() {
  return (
    <View style={{backgroundColor: '#FFFFFF', flex: 1}}>
      <StatusBar
        backgroundColor={'#FFFFFF'}
        barStyle={'dark-content'}></StatusBar>

      <View style={{flexDirection: 'row',marginTop:"55%",alignSelf:"center"}}>
        <Text
          style={{
            textAlign: 'center',
            color: '#231F20',
            fontSize: 49,

            fontFamily: 'Sora-Medium',
          }}>
          Re-Place
        </Text>
        <View
          style={{
            height: 6,
            marginVertical:45,
            left: 3,
            width: 6,
            backgroundColor: '#EE7192',
          }}></View>
      </View>
      <Text
        style={{
          fontFamily: 'Sora-Regular',
          alignSelf: 'center',
          width: "76%",
          fontSize: 12,
          letterSpacing:0.32,
          height: "50%",
          color: '#231F20',
          textAlign: 'center',
        }}>
        Instead of having your store credit printed and shoved in your wallet
        resulting in one forgetting about it, one can have them all digitally
        organized in one place. After returning an item and getting a store
        credit, the credit will be downloaded onto your app so the next time you
        are in the store, open your app, check whether you have any store credit
        and if it is your lucky day you do and you are good to go.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
