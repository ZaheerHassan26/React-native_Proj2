import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function Skip() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        alignSelf: 'flex-end',
        flexDirection: 'row',
        top: '12%',
        marginRight:4
      }}>
      <TouchableOpacity
        style={{padding: 5}}
        onPress={() =>navigation.navigate('Welcome')}
      >
        <Text style={styles.text}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontFamily: 'Sora-Regular',
    color: '#FD9BA7',
    fontSize: 18,
  },
});
