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

export default function Model({submit,ismodalactive, des, closemodel}) {
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
            <View style={{marginTop: '14%', alignSelf: 'center', width: '80%'}}>
              <Text
                style={{
                  flexBasis: '25%',
                  bottom: '25%',
                  textAlign: 'center',
                  color: '#1E1E1E',
                  fontSize: 18,
                  fontFamily: 'Sora-Regular',
                }}>
                {des}
              </Text>
              <Pressable
              onPress={submit}
                style={{
                  backgroundColor: '#FEADB4',
                  width: 336,
                  height: 46,
                  alignSelf: 'center',
                  marginTop: '0%',
                  borderRadius: 100,
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'white',
                    fontSize: 18,
                    fontFamily: 'Sora-Regular',
                  }}>
                  Yes
                </Text>
              </Pressable>
              <Pressable
                style={{justifyContent: 'center', marginTop: '4%'}}
                onPress={closemodel}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#FEADB4',
                    fontSize: 16,
                    fontFamily: 'Sora-Regular',
                  }}>
                  Cancel
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  Modal: {
    height: '37%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: 'white',
  },
});
