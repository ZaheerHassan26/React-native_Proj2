import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  StatusBar,
} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Profilemodel({ismodalactive, des, closemodel}) {
  return (
    <View>
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
              size={26}
              style={{
                width: 30,
                alignSelf: 'flex-end',
                flexBasis: '10%',
                color: '#EA7A89',
                textAlign: 'right',
                marginRight: '5%',
                marginTop: '6%',
              }}
            />
            <View
              style={{
                bottom: '14%',
                marginTop: '1%',
                alignSelf: 'center',
                width: '80%',
              }}>
              <Text
                style={{
                  marginBottom: '3%',
                  flexBasis: '20%',
                  textAlign: 'center',
                  color: '#1E1E1E',
                  fontSize: 18,
                  fontFamily: 'Sora-Regular',
                }}>
                {des}
              </Text>
              <View style={{flexDirection: 'column'}}>
                <Pressable
                  style={{
                    flexDirection: 'row',
                    height: 46,
                    marginTop: '0%',
                  }}>
                  <AntDesign
                    name={'camera'}
                    size={25}
                    style={{color: '#EA7A89'}}
                  />
                  <Text
                    style={{
                      fontSize: 16,
                      marginLeft: '8%',
                      fontFamily: 'Sora-Regular',
                      color: '#1E1E1E',
                    }}>
                    Take photo
                  </Text>
                </Pressable>
                <View
                  style={{
                    borderTopWidth: 1,
                    borderColor: '#F0F0F0',
                    width: '100%',
                    alignSelf: 'center',
                    top: 0,
                  }}></View>
              </View>
              <View>
                <Pressable
                  style={{
                    flexDirection: 'row',
                    marginTop: '4%',
                    height: 46,
                  }}
                  onPress={closemodel}>
                  <FontAwesome
                    name={'cloud-upload'}
                    size={25}
                    style={{color: '#EA7A89'}}
                  />
                  <Text
                    style={{
                      textAlign: 'center',
                      color: '#1E1E1E',
                      fontSize: 16,
                      marginLeft: '8%',
                      fontFamily: 'Sora-Regular',
                    }}>
                    Upload from the device
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  Modal: {
    height: '43%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: 'white',
  },
});
