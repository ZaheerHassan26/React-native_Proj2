import {StyleSheet, Text, View, Modal, StatusBar, Image} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

export default function QrModal({closemodel, ismodalactive}) {
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
              size={25}
              style={{
                color: '#EA7A89',
                alignSelf: 'flex-end',
                flexBasis: '10%',
                textAlign: 'right',
                marginRight: '5%',
                top: 20,
              }}
            />
            <View style={{top: 50, alignSelf: 'center'}}>
              <Text
                style={{
                  bottom: 35,
                  width: 300,
                  textAlign: 'center',
                  color: '#1E1E1E',
                  fontSize: 20,
                  fontFamily: 'Sora-Regular',
                }}>
                Jane Doe
              </Text>
              <Image
                style={{
                  width: 211,
                  height: 219,
                  alignSelf: 'center',
                  bottom: 20,
                }}
                source={require('../app/src/imag/QR.png')}
              />
              <Text
                style={{
                  width: 300,
                  textAlign: 'center',
                  color: '#1E1E1E',
                  fontSize: 16,
                  fontFamily: 'Sora-Regular',
                }}>
                12345678910111213
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  Modal: {
    height: 385,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: 'white',
  },
});
