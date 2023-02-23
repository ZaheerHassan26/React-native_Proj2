import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  StatusBar,
  ScrollView,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function SaveRecipt({navigation}) {
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
          right: '5%',
        }}>
        <AntDesign
          onPress={() => navigation.goBack()}
          name="left"
          size={25}
          color="#B24D5B"
          style={{top: '1.1%', right: '20%'}}
        />
        <Text
          style={{
            color: '#1E1E1E',
            fontFamily: 'Sora-Regular',
            fontSize: 20,
          }}>
          Receipt number 1
        </Text>
      </View>
      <View
        style={{
          paddingBottom: 30,
          borderTopWidth: 2,
          borderTopColor: '#F0F0F0',
          width: '100%',
          alignSelf: 'center',
          top: 25,
        }}></View>

      <ScrollView>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '3%',
          }}>
          <Image
            style={{width: 60, height: 60}}
            source={require('../src/imag/back1.png')}
          />
          <Image
            style={{width: 43, bottom: 35, height: 11}}
            source={require('../src/imag/Zara.png')}
          />
        </View>
        <Text
          style={{
            justifyContent: 'center',
            marginTop: '1%',
            fontSize: 18,
            textAlign: 'center',
            fontFamily: 'Sora-Regular',
            color: '#1E1E1E',
          }}>
          Zara New York
        </Text>

        <View
          style={{
            flexDirection: 'row',
            marginLeft: 20,
            marginTop: '5%',
          }}>
          <View>
            <Text
              style={{
                color: '#818080',
                fontSize: 12,
                fontFamily: 'Sora-Regular',
              }}>
              Date of Receipt:
            </Text>
            <Text
              style={{
                color: '#1E1E1E',
                fontSize: 14,
                fontFamily: 'Sora-Regular',
              }}>
              8/1/2022
            </Text>
          </View>
          <View style={{marginLeft: 89}}>
            <Text
              style={{
                color: '#818080',
                fontSize: 12,
                fontFamily: 'Sora-Regular',
              }}>
              Paid by store:
            </Text>
            <Text
              style={{
                color: '#1E1E1E',
                fontSize: 14,
                fontFamily: 'Sora-Regular',
              }}>
              Yes
            </Text>
          </View>
        </View>

        <View
          style={{
            marginLeft: 20,
            marginTop: 32,
            flexDirection: 'row',
          }}>
          <Text
            style={{
              color: '#1E1E1E',
              fontSize: 16,
              fontFamily: 'Sora-Regular',
            }}>
            Receipt Details
          </Text>
          <MaterialIcons
            name="edit"
            size={28}
            style={{color: '#EA7A89', marginLeft: 179}}
          />
        </View>

        <View
          style={{
            paddingBottom: 30,
            borderTopWidth: 2,
            borderTopColor: '#F0F0F0',
            color: '#F0F0F0',
            width: '100%',
            alignSelf: 'center',
            marginTop: '7%',
          }}></View>

        <View
          style={{
            marginLeft: 20,
            flexDirection: 'row',
          }}>
          <View style={{}}>
            <Text
              style={{
                color: '#818080',
                fontSize: 12,
                fontFamily: 'Sora-Regular',
              }}>
              Brand Name:
            </Text>
            <Text
              style={{
                color: '#1E1E1E',
                fontSize: 14,
                fontFamily: 'Sora-Regular',
              }}>
              Zara
            </Text>
          </View>
          <View style={{marginLeft: 108}}>
            <Text
              style={{
                color: '#818080',
                fontSize: 12,
                fontFamily: 'Sora-Regular',
              }}>
              Purchase Ammount:
            </Text>
            <Text
              style={{
                color: '#1E1E1E',
                fontSize: 14,
                fontFamily: 'Sora-Regular',
              }}>
              $50
            </Text>
          </View>
        </View>

        <View style={{marginTop: 20, marginLeft: 20}}>
          <Text
            style={{
              color: '#818080',
              fontSize: 12,
              fontFamily: 'Sora-Regular',
            }}>
            Other Details:
          </Text>
          <Text
            style={{
              left: 3,
              color: '#1E1E1E',
              fontSize: 14,
              fontFamily: 'Sora-Regular',
            }}>
            N/A
          </Text>
          <Text
            style={{
              marginTop: 29,
              color: '#1E1E1E',
              fontSize: 18,
              fontFamily: 'Sora-Regular',
            }}>
            Scanned receipt
          </Text>
        </View>
        <View
          style={{
            paddingBottom: 30,
            borderTopWidth: 2,
            borderTopColor: '#F0F0F0',
            width: '100%',
            alignSelf: 'center',
            marginTop: '6%',
          }}></View>

        <View style={{flexDirection: 'row', marginLeft: 20}}>
          <View
            style={{
              width: 30,
              height: 30,
              borderWidth: 1.5,
              borderColor: '#EA7A89',
              alignItems: 'center',
              borderRadius: 10,
              flexDirection: 'row',
            }}>
            <Image
              style={{width: 11, left: 8, height: 15}}
              source={require('../src/imag/pdf.png')}
            />
          </View>
          <Text
            style={{
              color: '#1E1E1E',
              top: 2,
              fontSize: 14,
              fontFamily: 'Sora-Regular',
              marginLeft: 17,
              width: 200,
            }}>
            Receipt_Number_1.pdf
          </Text>
          <FontAwesome
            name="cloud-download"
            size={22}
            style={{color: '#EA7A89', marginLeft: 55}}
          />
        </View>
        <View style={{paddingBottom: 40}}>
          <Pressable
            style={{
              backgroundColor: '#EA7A89',
              width: 336,
              borderRadius: 100,
              alignSelf: 'center',
              height: 46,
              justifyContent: 'center',
              marginTop: 53,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'Sora-Regular',
                fontSize: 16,
                color: 'white',
              }}>
              Request Payment
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
