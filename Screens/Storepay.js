import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Pressable,
  StatusBar,
} from 'react-native';
import React from 'react';
import ArrStore from '../../Components/ArrStore';
export default function Storepay({navigation, route}) {
  const id = route.params.storeid;
  const store = ArrStore.find(ele => {
    return ele.id === id;
  });

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar
        backgroundColor={'white'}
        barStyle={'dark-content'}></StatusBar>

      <View style={{paddingBottom: 15, top: 10}}>
        <View style={{flexDirection: 'row', right: 5, marginTop: 10}}>
          <View
            style={{
              left: 20,
              width: 60,
              height: 60,
              flexDirection: 'row',
            }}>
            <View style={{alignItems: 'center', flexDirection: 'row'}}>
              <Image
                style={{width: 60, height: 60, left: 25}}
                source={store.image}
              />
              <Image style={{right: 30}} source={store.image2} />
            </View>
          </View>
          <View style={{top: 5, left: 60, width: 230, height: 40}}>
            <Text style={styles.des}>{store.name}</Text>
            <Text style={styles.date}>Member since September2022</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          top: 30,
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
          Store Balance:
        </Text>
        <View style={{right: 40, flexDirection: 'row'}}>
          <Text
            style={{
              fontFamily: 'Sora-Regular',
              color: '#252525',
              fontSize: 12,
            }}>
            $
          </Text>
          <Text
            style={{
              fontFamily: 'Sora-Regular',
              color: '#B24D5B',
              fontSize: 20,
            }}>
            200
          </Text>
        </View>
      </View>
      <View style={{alignSelf: 'center'}}>
        <TextInput
          placeholder="Amount to be paid"
          placeholderTextColor={'#383838'}
          style={{
            paddingLeft: 20,
            fontFamily: 'Sora-Regular',
            fontSize: 12,
            top: 60,
            width: 336,
            height: 46,
            borderRadius: 50,
            backgroundColor: '#F5F5F5',
          }}
        />
      </View>
      <Pressable
        onPress={() => {
          navigation.navigate('Paydetail', {id: store});
        }}
        style={{
          backgroundColor: '#FEADB4',
          width: 336,
          height: 46,
          alignSelf: 'center',
          top: 100,
          borderRadius: 100,
        }}>
        <Text
          style={{
            top: 8,
            textAlign: 'center',
            color: 'white',
            fontSize: 16,
            fontFamily: 'Sora-Regular',
          }}>
          Pay
        </Text>
      </Pressable>
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
