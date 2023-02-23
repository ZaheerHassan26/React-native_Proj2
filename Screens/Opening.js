import {StyleSheet, Image, View, StatusBar} from 'react-native';
import React, {useState} from 'react';
import { useDeviceOrientation } from '@react-native-community/hooks';



export default function Opening({navigation}) {

  const { landscape }=useDeviceOrientation()
  const [setstate, setSetstate] = useState(false);
  const [Des, setDes] = useState(true);
  setTimeout(() => {
    setSetstate(true);
  }, 2000);
  if (!setstate) {
    return (
      <View style={styles.cont}>
         <StatusBar
        backgroundColor={'white'}
        barStyle={'dark-content'}></StatusBar>
        <Image
          style={{height: 109, width: 77.6,alignSelf:"center",}}
          source={require('../src/imag/Vector.png')}
        />
        <View
          style={{
            color: '#EE7192',
            height: 17.69,
            top:(landscape ? 0:'10.9%'),
            alignSelf:"center",
            left: 12,
            width: 17.79,
            backgroundColor: '#EE7192',
          }}></View>
      </View>
    );
  }

  {
    Des ? navigation.navigate('Des') : null;
  }
  setTimeout(() => {
    setDes(false);
    navigation.navigate('Welcome');
  }, 2000);
}
const styles = StyleSheet.create({
  cont: {
    
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
