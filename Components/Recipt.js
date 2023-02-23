import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Recipt({price, date, num,}) {
  return (
    <View style={{paddingBottom: 20, left: '1%'}}>
      <View style={{flexDirection: 'row', width: '60%'}}>
        <View
          style={{
            left: 20,
            top: 30,
            flexBasis: '60%',
            height: 60,
          }}>
          <Text
            style={{
              color: '#B24D5B',
              fontFamily: 'Sora-Regular',
              fontSize: 14,
            }}>
            {num}
          </Text>
          <Text
            style={{
              top: 6,
              left:2,
              color: '#A5A5A5',
              fontFamily: 'Sora-Regular',
              fontSize: 12,
            }}>
            {date}
          </Text>
        </View>
        <View
          style={{
            top: 28.9,
            flexBasis: '30%',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginLeft: '8%',
          }}>
          <View
            style={{
              flexBasis: '40%',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                color: '#252525',
                fontFamily: 'Sora-Regular',
                fontSize: 12,
              }}>
              $
            </Text>
            <Text
              style={{
                color: '#252525',
                fontFamily: 'Sora-Regular',
                fontSize: 20,
              }}>
              {price}
            </Text>
          </View>
          <View
            style={{
              flexBasis: '30%',
              marginLeft: '4%',
            }}>
            <MaterialIcons
              style={{color: '#FC94A2'}}
              name={'unarchive'}
              size={30}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
