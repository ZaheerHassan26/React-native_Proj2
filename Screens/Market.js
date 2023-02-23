import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  FlatList,
  Pressable,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Marketstore from '../../Components/Marketstore';
import Filtermodal from '../../Components/Filtermodal';

export default function Market({navigation}) {
  const [modalactive, setmodalactive] = useState(false);
  const closemodel = () => {
    setmodalactive(false);
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar
        backgroundColor={'white'}
        barStyle={'dark-content'}></StatusBar>

      <View
        style={{
          flexDirection: 'row',
          top: 25,
          marginLeft:20,
          paddingBottom: 20,
        }}>
        <Text
          style={{
            fontSize: 22,
            fontFamily: 'Sora-Bold',
            color: '#252525',
          }}>
          MarketPlace
        </Text>
        <View
          style={{
            width: 6,
            height: 6,
            backgroundColor: '#FEADB4',
            top: 20,
            left: 3,
          }}></View>
      </View>
      <View
        style={{
          justifyContent: 'flex-end',
          alignSelf: 'flex-end',
          marginRight:20,
          bottom: 30,
          borderRadius: 25,
          padding: 8,
          backgroundColor: '#FEADB4',
          flexDirection: 'row',
          width: 91,
          height: 39.27,
          justifyContent: 'center',
        }}>
        <Pressable
          onPress={() => setmodalactive(true)}
          style={{flexDirection: 'row'}}>
          <FontAwesome
            style={{top: 2}}
            color={'white'}
            size={18}
            name={'filter'}
          />
          <Text
            style={{
              bottom: 2,
              color: 'white',
              left: 8,
              fontSize: 16,
              fontFamily: 'Sora-Regular',
            }}>
            Filter
          </Text>
        </Pressable>
      </View>
      <View style={{alignSelf: 'center'}}>
        <TextInput
          placeholder="Search"
          placeholderTextColor={'#969696'}
          style={{
            fontFamily: 'Sora-Regular',
            fontSize: 14,
            width: 336,
            paddingLeft: 25,
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
      <View style={{bottom: 9, flex: 6, }}>
        <FlatList
          data={Marketstore}
          renderItem={({item}) => (
            <View style={{paddingBottom: 15}}>
              <View style={{flexDirection: 'row', top: 10,left:10}}>
                <View style={{marginLeft:21,alignItems:"center"}}>
                  <Image style={styles.Image} source={item.image} />
                  <Image style={{bottom: 20,}} source={item.image2} />
                </View>
                <View style={{top: 25,  width: 140, marginLeft:17,height: 22}}>
                  <Text style={styles.des}>{item.store}</Text>
                  <Text style={styles.date}>{item.time}</Text>
                </View>
                <Entypo
                  onPress={() => navigation.navigate('Storedetail',{storeid:item.id})}
                  style={{color: '#252525', marginLeft:60, top: 30}}
                  size={25}
                  name={item.icon}
                />
              </View>
              <Text
                style={{
                  left:10,
                  top: 30,
                  marginLeft:21,
                  fontFamily: 'Sora-Regular',
                  color: '#252525',
                  fontSize: 14,
                }}>
                {item.des}
              </Text>
              <Image
                source={item.product}
                style={{width: 336, height: 205, alignSelf: 'center', top: 50}}
              />

              <Pressable
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: 8,
                  borderRadius: 20,
                  width: 65,
                  flexDirection: 'row',
                  top: 30,
                  left: 120,
                  alignSelf: 'center',
                  justifyContent: 'center',
                }}>
                <AntDesign
                  name={item.likeicon}
                  size={20}
                  style={{right: 6}}
                  color={'black'}
                />
                <Text
                  style={{
                    fontSize: 17,
                    color: '#252525',
                    bottom: 2,
                    fontFamily: 'Sora-Regular',
                  }}>
                  {item.like}
                </Text>
              </Pressable>
              <View
                style={{
                  paddingBottom: 30,
                  borderTopWidth: 2,
                  borderTopColor: '#F0F0F0',
                  color: '#F0F0F0',
                  width: '100%',
                  alignSelf: 'center',
                  top: 40,
                }}></View>
            </View>
          )}
        />
      </View>
      <Filtermodal ismodalactive={modalactive} closemodel={closemodel} />
    </View>
  );
}

const styles = StyleSheet.create({
  Image: {
    top: 20,
    width: 60,
    height: 60,
  },
  date: {
    width: 179,
    color: '#A5A5A5',
    fontFamily: 'Sora-Regular',
    fontSize: 12,
  },
  des: {
    fontFamily: 'Sora-Regular',
    color: '#252525',
    fontSize: 16,
  },
});
