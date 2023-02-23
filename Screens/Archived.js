import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Recipt from '../../Components/Recipt';

export default function Archived({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar
        backgroundColor={'white'}
        barStyle={'dark-content'}></StatusBar>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          top: '4%',
          right: '3.6%',
        }}>
        <View>
          <AntDesign
            onPress={() => {
              navigation.goBack();
            }}
            name="left"
            size={25}
            color="#B24D5B"
            style={{top: '20%',right:"20%"}}
          />
        </View>
        <View>
          <Text
            style={{
              color: '#1E1E1E',
              fontFamily: 'Sora-Regular',
              fontSize: 20,
            }}>
            Archived Receipts
          </Text>
        </View>
      </View>
      <View
        style={{
          paddingBottom: 30,
          borderTopWidth: 2,
          borderTopColor: '#F0F0F0',
          color: '#F0F0F0',
          width: '100%',
          alignSelf: 'center',
          top: 30,
        }}></View>

      <View>
        <Text
          style={{
            right:"5%",
            top: 10,
            textAlign: 'right',
            color: '#A5A5A5',
            fontSize: 12,
            fontFamily: 'Sora-Regular',
          }}>
          UNARCHIVE
        </Text>
        <View style={{width: '160%'}}>
          <Recipt
            num={'Receipt number 1'}
            date={'8/4/2022'}
            price={'150'}
            icon={'unarchive'}
          />
          <Recipt
            num={'Receipt number 2'}
            date={'8/2/2022'}
            price={'50'}
            icon={'unarchive'}
          />
          <Recipt
            num={'Receipt number 3'}
            date={'7/15/2022'}
            price={'50'}
          />
          <Recipt
            num={'Receipt number 4'}
            date={'7/15/2022'}
            price={'50'}
          />
          <Recipt
            num={'Receipt number 5'}
            date={'7/15/2022'}
            price={'50'}
        />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
