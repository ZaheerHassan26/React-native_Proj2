import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import AccountCom from '../../Components/AccountCom';

export default function ForgetPass() {
  return (
    <View style={{backgroundColor: '#FFE3E4', flex: 1}}>
      <AccountCom Detail={'Forgot your password?'} />
      <View
        style={{
          flex: 1,
          backgroundColor: '#FFFFFF',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}>
        <TextInput
          style={styles.input}
          placeholder="email-address"
          placeholderTextColor={'#969696'}
        />
        <TouchableWithoutFeedback>
          <Text
            style={{
              top: 60,
              height: 46,
              fontFamily: ' Sora-Regular',
              borderRadius: 100,
              textAlign: 'center',
              alignSelf: 'center',
              width: 336,
              backgroundColor: '#FD9BA7',
              fontWeight: '400',
              fontSize: 16,
              paddingTop: 10,
              color: '#FFFFFF',
            }}>
            Reset Password
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    top: 30,
    backgroundColor: '#F5F5F5',
    width: 336, fontFamily: ' Sora-Regular',
    height: 46,
    fontSize: 14,
    alignSelf: 'center',
    borderRadius: 50,
    paddingBottom: 10,
    paddingLeft: 20,
  },
});
