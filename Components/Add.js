import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import React from 'react';

export default function Add() {
  return (
    <View>
      <TouchableWithoutFeedback>
        <View
          style={{
            backgroundColor: '#515151',
            width: 58,
            height: 58,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            borderRadius: 30,
          }}>
          <Text style={{fontSize: 35, color: 'white'}}>+</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({});
