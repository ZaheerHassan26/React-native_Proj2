import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  ScrollView,
  Pressable,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
export default function ScanResult({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar
        backgroundColor={'white'}
        barStyle={'dark-content'}></StatusBar>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          top: '2%',
          right: '8.2%',
        }}>
        <AntDesign
          onPress={() => navigation.goBack()}
          name="left"
          size={25}
          color="#B24D5B"
          style={{marginTop: 6,right:"20%"}}
        />
        <Text
          style={{
            color: '#1E1E1E',
            fontFamily: 'Sora-Regular',
            fontSize: 20,
          }}>
          Scan Result
        </Text>
      </View>
      <View
        style={{
          paddingBottom: 30,
          borderTopWidth: 2,
          borderTopColor: '#F0F0F0',
          color: '#F0F0F0',
          width: '100%',
          alignSelf: 'center',
          top: 20,
        }}></View>

      <ScrollView style={{flex: 1}}>
        <Text
          style={{
            fontSize: 16,
            fontFamily: 'Sora-Regular',
            color: '#1E1E1E',
            marginLeft:20,
          }}>
          Receipt Number 1
        </Text>
        <Image
          style={{width: 306, height: 570, marginTop: 25, alignSelf: 'center'}}
          source={require('../src/imag/Recipt.png')}
        />

        <Pressable
          style={{
            marginTop: 60,
            borderWidth: 2,
            borderColor: '#EA7A89',
            height: 46,
            alignSelf: 'center',
            width: 336,
            marginBottom: 50,
            borderRadius: 100,
            backgroundColor: '#EA7A89',
            padding: 4,
          }}
          onPress={() => {
            navigation.navigate('AddRecipt');
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'Sora-Regular',
              fontSize: 16,paddingTop:4,
              color: 'white',
            }}>
            Next
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
