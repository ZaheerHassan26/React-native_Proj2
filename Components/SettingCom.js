import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function SettingCom({Details, handlechange}) {
  return (
    <View style={{top: 10, margin: 15, right: 10}}>
      <Pressable onPress={handlechange}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              top: 10,
              left: 20,
              fontSize: 16,
              fontFamily: 'Sora-Regular',
              color: '#231F20',
            }}>
            {Details}
          </Text>
          <AntDesign name="right" size={20} color="#EA7A89" style={{top: 11}} />
        </View>
        <View
          style={{
            borderTopWidth: 1.5,
            borderTopColor: '#F0F0F0',
            width: '100%',
            alignSelf: 'center',
            top: 20,
          }}></View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({});
