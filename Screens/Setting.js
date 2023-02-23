import {
  StyleSheet,
  Text,
  View,
  Switch,
  StatusBar,
  ScrollView,
} from 'react-native';
import React, {useState,useContext} from 'react';
import SettingCom from '../../Components/SettingCom';
import Model from '../../Components/Modal';
import { Authcontext } from '../Navigation/Context';


export default function Setting({navigation}) {
  const {signout}=useContext(Authcontext)


  const [isactive, setisactive] = useState(false);
  const [ismodalactive, setmodalisactive] = useState(false);
  const [Delmodalactive, setDelmodalisactive] = useState(false);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar
        backgroundColor={'white'}
        barStyle={'dark-content'}></StatusBar>

      <View>
        <Text
          style={{
            top: 10,
            alignSelf: 'center',
            color: '#1E1E1E',
            fontSize: 20,
            fontFamily: 'Sora-Regular',
          }}>
          Settings
        </Text>
        <View
          style={{
            paddingBottom: 30,
            borderTopWidth: 2,
            borderTopColor: '#F0F0F0',
            width: '100%',
            alignSelf: 'center',
            top: 20,
          }}></View>
      </View>
      <ScrollView style={{flex: 1}}>
        <View
          style={{
            top: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{

              color: '#1E1E1E',
              marginLeft:"6.5%",
              fontSize: 16,
              fontFamily: 'Sora-Regular',
            }}>
            Push Notification
          </Text>
        </View>
        <Switch
          style={{padding: 10, bottom: 15, marginRight: 10}}
          trackColor={{false: '#FFD1D7', true: '#FFD1D7'}}
          thumbColor={isactive ? '#EA7A89' : '#FFFFFF'}
          value={isactive}
          onValueChange={() => setisactive(!isactive)}
        />
        <View style={{paddingBottom: 30,bottom: '2%'}}>
          <SettingCom
            Details={'Archived Receipts'}
            handlechange={() => navigation.navigate('Archieved')}
          />
          <SettingCom
            Details={'My Stores'}
            handlechange={() => navigation.navigate('Mystore')}
          />
          <SettingCom
            Details={'Terms and Conditions'}
            handlechange={() => navigation.navigate('Tc')}
          />
          <SettingCom
            Details={'Privacy Policy'}
            handlechange={() => navigation.navigate('PP')}
          />
          <SettingCom
            Details={'Change Password'}
            handlechange={() => navigation.navigate('chpass')}
          />
          <SettingCom
            Details={'Feedback'}
            handlechange={() => navigation.navigate('feedback')}
          />
          <SettingCom
            Details={'Delete Account'}
            handlechange={() => setDelmodalisactive(true)}
          />
          <SettingCom
            Details={'Logout'}
            handlechange={() => setmodalisactive(true)}
          />
        </View>
      </ScrollView>
      <Model
      submit={()=>signout()}
        des={'Are you sure you want to logout?'}
        closemodel={() => setmodalisactive(false)}
        ismodalactive={ismodalactive}
      />
      <Model
        des={'Are you sure you want to delete account?'}
        closemodel={() => setDelmodalisactive(false)}
        ismodalactive={Delmodalactive}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
