import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TextInput,
  Image,
  StatusBar,
  ScrollView,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Calendermodal from '../../Components/Calendermodal';

export default function AddRecipt({navigation}) {
  const [date, setdate] = useState('Date');
  const [calendershow, setcalendershow] = useState(false);


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
          right: '7.5%',
        }}>
        <AntDesign
          onPress={() => {
            navigation.goBack();
          }}
          name="left"
          size={25}
          color="#B24D5B"
          style={{top: '0.8%', right: '20%'}}
        />
        <Text
          style={{
            color: '#1E1E1E',
            fontFamily: 'Sora-Regular',
            fontSize: 20,
          }}>
          Add Recipt
        </Text>
      </View>
      <View
        style={{
          paddingBottom: 30,
          borderTopWidth: 1,
          borderTopColor: '#F0F0F0',
          color: '#F0F0F0',
          width: '100%',
          alignSelf: 'center',
          top: '2%',
        }}></View>

      <ScrollView style={{paddingBottom: 20}}>
        <TextInput
          placeholder="Receipt number 1"
          placeholderTextColor={'#383838'}
          style={{
            alignSelf: 'center',
            marginTop: 30,
            paddingLeft: 30,
            fontFamily: 'Sora-Regular',
            fontSize: 14,
            width: 336,
            height: 46,
            borderRadius: 50,
            backgroundColor: '#F5F5F5',
          }}
        />

        <TouchableWithoutFeedback>
          <Text
            style={{
              alignSelf: 'center',
              marginTop: 20,
              textAlign: 'center',
              paddingTop: 6,
              fontFamily: 'Sora-Regular',
              fontSize: 16,
              width: 336,
              color: '#EA7A89',
              height: 46,
              borderWidth: 2,
              borderColor: '#EA7A89',
              borderRadius: 100,
            }}>
            + Add store
          </Text>
        </TouchableWithoutFeedback>

        <View
          style={{flexDirection: 'row', marginTop: 20, alignSelf: 'center'}}>
          <Pressable
            onPress={() => setcalendershow(true)}
            style={{
              paddingTop: 3,
              backgroundColor: '#F5F5F5',
              fontFamily: 'Sora-Regular',
              borderRadius: 50,
              justifyContent: 'center',
              width: 158,
              height: 46,
              paddingLeft: 20,
              fontSize: 14,
            }}>
            <Text
              style={{
                bottom: 4,
                left: 6,
                color: '#969696',
                fontFamily: 'Sora-Regular',
              }}>
              {date}
            </Text>
          </Pressable>
          <FontAwesome5
            name="calendar"
            size={20}
            color={'#969696'}
            style={{top: 10, right: 35}}
          />
          <View>
            <TextInput
              keyboardType="numeric"
              placeholder="Amount"
              placeholderTextColor={'#969696'}
              style={{
                paddingTop: 3,
                backgroundColor: '#F5F5F5',
                fontFamily: 'Sora-Regular',
                borderRadius: 50,
                width: 158,
                height: 46,
                paddingLeft: 20,
                fontSize: 14,
              }}
            />
          </View>
        </View>

        <View
          style={{
            paddingBottom: 30,
            borderTopWidth: 1,
            borderTopColor: '#F0F0F0',
            color: '#F0F0F0',
            width: '100%',
            alignSelf: 'center',
            top: '4%',
          }}></View>

        <View style={{marginLeft: 20, marginTop: 52}}>
          <Text
            style={{
              fontSize: 18,
              color: '#1E1E1E',
              fontFamily: 'Sora-Regular',
            }}>
            Scan result :
          </Text>
          <View
            style={{
              width: 30,
              height: 30,
              borderWidth: 1.5,
              marginTop: 20,
              borderColor: '#EA7A89',
              alignItems: 'center',
              borderRadius: 10,
              flexDirection: 'row',
            }}>
            <Image
              style={{width: 11, left: 8, height: 15}}
              source={require('../src/imag/pdf.png')}
            />
            <Text
              style={{
                color: '#1E1E1E',
                fontSize: 14,
                fontFamily: 'Sora-Regular',
                left: 30,
                width: 200,
              }}>
              Receipt_Number_1.pdf
            </Text>
          </View>
        </View>
        <MaterialCommunityIcons
          name="scan-helper"
          size={22}
          style={{color: '#EA7A89', top: '13.2%', left: '30%'}}
        />
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('SRecipt');
          }}>
          <Text
            style={{
              alignSelf: 'center',
              marginTop: 49,
              textAlign: 'center',
              paddingTop: 7,
              fontFamily: 'Sora-Regular',
              fontSize: 16,
              width: 336,
              color: '#EA7A89',
              height: 46,
              borderWidth: 2,
              borderColor: '#EA7A89',
              borderRadius: 100,
            }}>
            Rescan
          </Text>
        </TouchableWithoutFeedback>
        <View style={{paddingBottom: 30}}>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('SaveRecipt')}>
            <Text
              style={{
                backgroundColor: '#EA7A89',
                alignSelf: 'center',
                marginTop: 73,
                textAlign: 'center',
                paddingTop: 8,
                fontFamily: 'Sora-Regular',
                fontSize: 16,
                width: 336,
                color: 'white',
                height: 46,
                borderWidth: 2,
                borderColor: '#EA7A89',
                borderRadius: 100,
              }}>
              Save
            </Text>
          </TouchableWithoutFeedback>
        </View>
        <Calendermodal
          showcalender={calendershow}
          removemodal={val => setcalendershow(val)}
          Submit={selecteddate => {
            setdate(selecteddate);
          }}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
