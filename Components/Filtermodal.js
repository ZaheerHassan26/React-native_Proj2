import {
  StyleSheet,
  Text,
  View,
  Modal,
  TextInput,
  Pressable,
  StatusBar,
} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Filtermodal({ismodalactive, closemodel}) {
  return (
    <Modal
      style={{flex: 1, justifyContent: 'flex-end'}}
      transparent={true}
      visible={ismodalactive}
      animationType="slide">
      <StatusBar
        backgroundColor={'#000000aa'}
        barStyle={'dark-content'}></StatusBar>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          backgroundColor: '#000000aa',
        }}>
        <View style={styles.Modal}>
          <Entypo
            onPress={closemodel}
            name="cross"
            size={25}
            style={{
              alignSelf: 'flex-end',
              color: '#EA7A89',
              marginRight: '8%',
              marginTop: '6%',
            }}
          />
          <View style={{alignSelf: 'center'}}>
            <Text
              style={{
                width: 300,
                textAlign: 'center',
                color: '#1E1E1E',
                fontSize: 20,
                fontFamily: 'Sora-Regular',
              }}>
              Filter
            </Text>
            <View style={{marginTop: '4%', alignSelf: 'center'}}>
              <TextInput
                placeholder="Select Category"
                placeholderTextColor={'#969696'}
                style={{
                  paddingLeft: 20,
                  fontFamily: 'Sora-Regular',
                  fontSize: 20,
                  width: 336,
                  height: 46,
                  borderRadius: 50,
                  backgroundColor: '#F5F5F5',
                }}
              />
              <AntDesign
                style={{bottom: 35, alignSelf: 'flex-end', right: '7%'}}
                color={'#969696'}
                size={22}
                name={'down'}
              />
            </View>
            <View style={{alignSelf: 'center'}}>
              <TextInput
                placeholder="Select Miles"
                placeholderTextColor={'#969696'}
                style={{
                  paddingLeft: 20,
                  fontFamily: 'Sora-Regular',
                  fontSize: 20,
                  width: 336,
                  height: 46,
                  borderRadius: 50,
                  backgroundColor: '#F5F5F5',
                }}
              />
              <AntDesign
                style={{bottom: 35, alignSelf: 'flex-end', right: '7%'}}
                color={'#969696'}
                size={22}
                name={'down'}
              />
            </View>

            <Pressable
              onPress={closemodel}
              style={{
                backgroundColor: '#FEADB4',
                width: 336,
                height: 46,
                alignSelf: 'center',
                // top: 27,
                justifyContent: 'center',
                marginTop: '4%',
                borderRadius: 100,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontSize: 18,
                  fontFamily: 'Sora-Regular',
                }}>
                Apply Filter
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  Modal: {
    height: 401,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: 'white',
  },
});
