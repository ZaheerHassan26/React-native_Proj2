import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  ScrollView,
} from 'react-native';
import React from 'react';
import Marketpaycom from '../../Components/Marketpaycom';
export default function Paydetail({route}) {
  const id = route.params.id;

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar
        backgroundColor={'white'}
        barStyle={'dark-content'}></StatusBar>

      <ScrollView style={{flex: 1}}>
        <View style={{flexDirection: 'row', right: 5, marginTop: 18}}>
          <View
            style={{
              left: 10,
              top: 15,
              width: 60,
              height: 60,
              flexDirection: 'row',
            }}>
            <View style={{alignItems: 'center', flexDirection: 'row'}}>
              <Image
                style={{width: 60, height: 60, left: 25}}
                source={id.image}
              />
              <Image style={{right: 30}} source={id.image2} />
            </View>
          </View>
          <View style={{top: 20, left: 50, width: 230, height: 40}}>
            <Text style={styles.des}>{id.name}</Text>
            <Text style={styles.date}>Member since September2022</Text>
          </View>
        </View>
        <View
          style={{
            marginTop: '8%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              left: 30,
              fontFamily: 'Sora-Regular',
              color: '#252525',
              fontSize: 18,
            }}>
            Store Information
          </Text>
        </View>

        <View
          style={{
            paddingBottom: 30,
            borderTopWidth: 1,
            borderTopColor: '#F0F0F0',
            width: '100%',
            marginTop: '5%',
          }}></View>

        <View
          style={{
            marginTop: '2%',
            left: '8%',
          }}>
          <Text
            style={{
              fontFamily: 'Sora-Regular',
              color: '#818080',
              fontSize: 12,
            }}>
            Store Owner Name:
          </Text>
          <Text
            style={{
              top: 2,
              fontFamily: 'Sora-Regular',
              color: '#1E1E1E',
              fontSize: 14,
            }}>
            Jessica Jameson
          </Text>
        </View>
        <View style={{marginTop: '10%', left: '8%'}}>
          <Text
            style={{
              fontFamily: 'Sora-Regular',
              color: '#818080',
              fontSize: 12,
            }}>
            Phone Number:
          </Text>
          <Text
            style={{
              top: 2,
              fontFamily: 'Sora-Regular',
              color: '#1E1E1E',
              fontSize: 14,
            }}>
            +1357913579
          </Text>
        </View>
        <View
          style={{
            marginTop: '10%',
            left: '8%',
          }}>
          <Text
            style={{
              fontFamily: 'Sora-Regular',
              color: '#818080',
              fontSize: 12,
            }}>
            Email Address:
          </Text>
          <Text
            style={{
              top: 2,
              fontFamily: 'Sora-Regular',
              color: '#1E1E1E',
              fontSize: 14,
            }}>
            janedoe@gmail.com
          </Text>
        </View>
        <View style={{marginTop: '10%', left: '8%'}}>
          <Text
            style={{
              fontFamily: 'Sora-Regular',
              color: '#818080',
              fontSize: 12,
            }}>
            Store Address:
          </Text>
          <Text
            style={{
              width: '95%',
              top: 2,
              fontFamily: 'Sora-Regular',
              color: '#1E1E1E',
              fontSize: 14,
            }}>
            Street 1, New York, NY 11000, United States
          </Text>
        </View>

        <View style={{}}>
          <Text
            style={{
              marginTop: '4%',
              left: '8%',
              fontFamily: 'Sora-Medium',
              color: '#1E1E1E',
              fontSize: 18,
            }}>
            My Receipts
          </Text>

          <View
            style={{
              paddingBottom: 30,
              borderTopWidth: 1,
              borderTopColor: '#F0F0F0',
              width: '100%',
              marginTop: '5%',
            }}></View>
          <View style={{paddingBottom: 50}}>
            <Marketpaycom
              num={'Receipt number 1'}
              date={'8/4/2022'}
              price={'150'}
            />
            <Marketpaycom
              num={'Receipt number 2'}
              date={'8/2/2022'}
              price={'50'}
            />
            <Marketpaycom
              num={'Receipt number 3'}
              date={'7/15/2022'}
              price={'50'}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Image: {
    left: 30,
    top: 20,
    width: 76,
    height: 76,
  },
  date: {
    color: '#A5A5A5',
    fontFamily: 'Sora-Regular',
    fontSize: 12,
  },
  des: {
    fontFamily: 'Sora-Regular',
    color: '#252525',
    fontSize: 20,
  },
});
