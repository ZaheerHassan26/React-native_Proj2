import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Marketstore from '../../Components/Marketstore';

export default function Storedetail({navigation, route}) {
  const id = route.params.storeid;

  const selectedstore = Marketstore.find(ele => {
    return id === ele.id;
  });
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView style={{flex: 1}}>
        <View style={{flexDirection: 'row', left: 15,marginTop:6}}>
          <AntDesign
            onPress={() => {
              navigation.navigate('Market');
            }}
            name="left"
            size={25}
            color="#B24D5B"
            style={{top: 5}}
          />
          <Text
            style={{
              textAlign: 'center',
              color: '#1E1E1E',
              left: 89,
              fontFamily: 'Sora-Regular',
              fontSize: 20,
            }}>
            {selectedstore.store}
          </Text>
        </View>
        <View
          style={{
            borderTopWidth: 2,
            borderTopColor: '#F0F0F0',
            width: '100%',
            alignSelf: 'center',
            marginTop: 5,
          }}></View>
        <Text
          style={{
            color: '#1E1E1E',
            marginLeft: 20,
            marginTop: 27,
            fontFamily: 'Sora-Regular',
            fontSize: 16,
          }}>
          {selectedstore.des}
        </Text>
        <Text
          style={{
            width: 300,
            color: '#1E1E1E',
            marginLeft: 20,
            marginVertical: 40,
            fontFamily: 'Sora-Regular',
            fontSize: 14,
          }}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
        <Text
          style={{
            width: 336,
            color: '#EA7A89',
            marginLeft: 20,
            bottom: 35,
            fontFamily: 'Sora-Regular',
            fontSize: 14,
          }}>
          https://this_is_the_example.com
        </Text>
        <Image
          source={selectedstore.product}
          style={{width: 336, height: 205, alignSelf: 'center'}}
        />
        <Pressable
          style={{
            backgroundColor: '#FFFFFF',
            padding: 8,
            borderRadius: 20,
            width: 65,
            flexDirection: 'row',
            bottom: 15,
            left: 120,
            alignSelf: 'center',
            justifyContent: 'center',
          }}>
          <AntDesign
            name={'like1'}
            size={20}
            style={{right: 6}}
            color={'#EA7A89'}
          />
          <Text
            style={{
              fontSize: 17,
              color: '#EA7A89',
              bottom: 2,
              fontFamily: 'Sora-Regular',
            }}>
            31
          </Text>
        </Pressable>
        <View
          style={{
            paddingBottom: 30,
            marginLeft: 20,
            flexDirection: 'row',
            top: 0,
          }}>
          <View style={{alignItems: 'center'}}>
            <Image style={styles.Image} source={selectedstore.image} />
            <Image style={{bottom: 55}} source={selectedstore.image2} />
          </View>
          <View style={{bottom: 10, left: 10, width: 140}}>
            <Text style={styles.des}>{selectedstore.loc}</Text>
            <View style={{right: 5, flexDirection: 'row'}}>
              <Entypo size={20} name={'location-pin'} color={'#EA7A89'} />
              <Text style={styles.date}>Street number 123</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Image: {
    bottom: 15,
    width: 60,
    height: 60,
  },
  date: {
    width: 179,
    color: '#A5A5A5',
    fontFamily: 'Sora-Regular',
    fontSize: 14,
  },
  des: {
    width: 180,
    fontFamily: 'Sora-Regular',
    color: '#252525',
    fontSize: 16,
  },
});
