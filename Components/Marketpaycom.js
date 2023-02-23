import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
export default function Marketpaycom({price, date, num}) {
  return (
    <View style={{paddingBottom: 20, left: '2%'}}>
      <View style={{flexDirection: 'row', width: '100%'}}>
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
              top: 8,
              color: '#A5A5A5',
              fontFamily: 'Sora-Regular',
              fontSize: 12,
            }}>
            {date}
          </Text>
        </View>
        <View
          style={{
            top: 19.9,
            flexBasis: '40%',
            flexDirection: 'row',
          }}>
          <View
            style={{
              top: 8,
              left: 28,
              flexBasis: '30%',
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
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
