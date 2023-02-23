import {Image, StyleSheet, View, Text} from 'react-native';
import React from 'react';

export default function SlideComponent({Image4, text, desc, Image3, Image2}) {
  return (
    <View style={{}}>
      {Image4 && (
        <Image
          style={{
            width: 283,
            height: 229,
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: '40%',
          }}
          source={Image4}
        />
      )}
      {Image2 && (
        <Image
          style={{
            width: 305,
            height: 211.37,
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: '40%',
          }}
          source={Image2}
        />
      )}
      {Image3 && (
        <Image
          style={{
            width: 298.43,
            height: 206.55,
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: '40%',
          }}
          source={Image3}
        />
      )}

      <Text
        style={{
          fontFamily: 'Sora-Medium',
          color: '#231F20',
          fontWeight: '500',
          fontSize: 20,
          alignSelf: 'center',
          marginTop:40,
        }}>
        {text}
      </Text>
      <Text
        style={{
          fontFamily: 'Sora-Regular',
          alignSelf: 'center',
          marginTop:34,
          textAlign: 'center',
          width: 300,
          color: '#231F20',
          fontSize: 14,
          fontWeight: '400',
        }}>
        {desc}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {},
});
