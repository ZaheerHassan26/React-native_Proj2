import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  StatusBar,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function ScanRecipt({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar
        backgroundColor={'white'}
        barStyle={'dark-content'}></StatusBar>
      <AntDesign
        onPress={() => navigation.goBack()}
        name="left"
        size={25}
        color="#B24D5B"
        style={{marginLeft:20, top: 20}}
      />
      <View style={{alignSelf: 'center', top: 200}}>
        <Text
          style={{
            fontFamily: 'Sora-Regular',
            color: '#1E1E1E',
            fontSize: 20,
            alignSelf: 'center',
          }}>
          Scan the Receipt
        </Text>
        <Text
          style={{
            fontFamily: 'Sora-Regular',
            top: 20,
            color: '#818080',
            alignSelf: 'center',
            fontSize: 16,
          }}>
          Use your camera to scan the receipt
        </Text>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('ScanResult');
          }}>
          <Text
            style={{
              backgroundColor: '#EA7A89',
              alignSelf: 'center',
              top: 200,
              textAlign: 'center',
              paddingTop: 10,
              fontFamily: 'Sora-Regular',
              fontSize: 16,
              width: 336,
              color: 'white',
              height: 46,
              borderWidth: 2,
              borderColor: '#EA7A89',
              borderRadius: 100,
            }}>
            Scan now
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
