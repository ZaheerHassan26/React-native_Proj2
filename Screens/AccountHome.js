import {
  ScrollView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';

import Storecom from '../../Components/Storecom';
import Add from '../../Components/Add';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function AccountHome() {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar
        backgroundColor={'white'}
        barStyle={'dark-content'}></StatusBar>
      <View
        style={{
          flexDirection: 'row',
          flexBasis: '10%',
          marginLeft: '4.5%',
          marginVertical: 10,
        }}>
        <View style={{flexDirection: 'column'}}>
          <View
            style={{
              marginHorizontal: 15,
              flexDirection: 'row',
              marginTop: '3%',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Sora-Medium',
                color: '#252525',
              }}>
              Hello, Jane
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Sora-Medium',
                color: '#EE7192',
              }}>
              !
            </Text>
          </View>
          <View>
            <Text
              style={{
                marginVertical: 7,
                marginHorizontal: 15,
                fontSize: 14,
                fontFamily: 'Sora-Regular',
                color: '#818080',
              }}>
              Here is the list of your stores
            </Text>
          </View>
        </View>
        <View
          style={{
            marginHorizontal: 6,
            marginVertical: 18,
            bottom: '10%',
            borderRadius: 25,
            padding: 5,
            backgroundColor: '#FEADB4',
            flexDirection: 'row',
            width: 91,
            height: 37.29,
            justifyContent: 'center',
          }}>
          <FontAwesome
            style={{top: 2}}
            color={'white'}
            size={22}
            name={'filter'}
          />
          <Text
            style={{
              color: 'white',
              left: 8,
              fontSize: 16,
              fontFamily: 'Sora-Regular',
            }}>
            Filter
          </Text>
        </View>
      </View>

      <View style={{alignSelf: 'center', marginVertical: 4}}>
        <TextInput
          placeholder="search"
          placeholderTextColor={'#969696'}
          style={{
            paddingLeft: 25,
            fontFamily: 'Sora-Regular',
            fontSize: 14,
            width: 336,
            height: 46,
            borderRadius: 50,
            backgroundColor: '#F5F5F5',
          }}
        />
        <FontAwesome
          style={{bottom: 35, left: 280}}
          color={'#969696'}
          size={22}
          name={'search'}
        />
      </View>
      <ScrollView>
        <View style={{flex: 1, marginHorizontal: 15}}>
          <Storecom />
          <View style={{marginTop: 70}}>
            <Add />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Sora-Medium',
  },

  Image: {
    left: 10,
    top: 20,
    width: 60,
    height: 60,
  },
  des: {
    fontFamily: 'Sora-Regular',
    fontSize: 15,
  },
  date: {
    color: '#A5A5A5',
    fontFamily: 'Sora-Regular',
    fontSize: 15,
  },
});
