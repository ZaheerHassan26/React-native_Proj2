import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import React from 'react';

export default function SignIn({handleEvent}) {
  return (
    <View style={{flexDirection: 'row', alignSelf: 'center'}}>
      <Text
        style={{
          fontFamily: ' Sora-Regular',
          color: '#111111',
          fontSize: 16,
        }}>
        Already a member?
      </Text>
      <TouchableWithoutFeedback onPress={handleEvent}>
        <Text
          style={{left:4,
            color: '#EA7A89',
            fontFamily: ' Sora-Regular',
            fontSize: 16,
          }}>
          Sign in
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({});
