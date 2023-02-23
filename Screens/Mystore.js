import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  StatusBar,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import ArrStore from '../../Components/ArrStore';

export default function Mystore({navigation}) {
  const [Store, setStore] = useState(ArrStore);

  const del = id => {
   const newstore= Store.filter(ele=> ( ele.id!==id))
    setStore(newstore)
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar
        backgroundColor={'white'}
        barStyle={'dark-content'}></StatusBar>

      <View
        style={{
          flexDirection: 'row',
          top: 20,
          left: 24,
        }}>
        <Text
          style={{
            marginLeft: '4%',
            color: '#1E1E1E',
            fontFamily: 'Sora-Bold',
            fontSize: 22,
          }}>
          My Stores
        </Text>
        <View
          style={{
            height: 4,
            width: 4,
            backgroundColor: '#EE7192',
            top: 17,
            left: 2,
          }}></View>
        <View
          style={{
            marginLeft: '15.5%',
            borderRadius: 100,
            flexDirection: 'row',
            backgroundColor: '#FEADB4',
            width: 134,
            height: 37.29,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontFamily: 'Sora-Regular',
              fontSize: 18,
              right: 5,
              paddingBottom: 3,
            }}>
            +
          </Text>
          <Text
            style={{
              paddingBottom: 2,
              color: 'white',
              fontFamily: 'Sora-Regular',
              fontSize: 16,
            }}>
            Add Store
          </Text>
        </View>
      </View>
      <View style={{alignSelf: 'center', top: 40}}>
        <TextInput
          placeholder="search"
          placeholderTextColor={'#969696'}
          style={{
            paddingLeft: 20,
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
      <View style={{top: 45}}>
        <FlatList
          data={Store}
          renderItem={({item}) => (
            <View style={{paddingBottom: 60}}>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    width: 60,
                    height: 60,
                    flexDirection: 'row',
                  }}>
                  <View style={{alignItems: 'center', flexDirection: 'row'}}>
                    <Image
                      style={{width: 60, height: 60, left: 25}}
                      source={item.image}
                    />
                    <Image style={{right: 30}} source={item.image2} />
                  </View>
                </View>
                <View style={{marginLeft: '9%', top: 5}}>
                  <Text
                    style={{
                      color: '#252525',
                      fontFamily: 'Sora-Regular',
                      fontSize: 16,
                    }}>
                    {item.des}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      top: 3,
                      color: '#A5A5A5',
                      fontFamily: 'Sora-Regular',
                    }}>
                    {item.date}
                  </Text>
                </View>
                <View
                  style={{flexDirection: 'row', marginLeft: '15%', top: 15}}>
                  <Entypo
                    onPress={() => {
                      navigation.navigate('Storepay', {storeid: item.id});
                    }}
                    name={item.icon2}
                    size={22}
                    style={{color: '#EA7A89', right: 10}}
                  />
                  <MaterialCommunityIcons
                    onPress={()=>del(item.id)}
                    name={item.icon1}
                    size={25}
                    style={{color: '#EA7A89', left: 0}}
                  />
                </View>
              </View>
              <View
                style={{
                  paddingBottom: 3,
                  borderTopWidth: 1,
                  borderColor: '#A5A5A5',
                  width: 336,
                  alignSelf: 'center',
                  top: 30,
                }}></View>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
