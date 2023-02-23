import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import React, {useState, useEffect, useMemo} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import {Authcontext} from './Context';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Opening from '../src/Opening';
import Des from '../src/Des';
import Welcome from '../src/Welcome';
import SigninUser from '../src/SigninUser';
import ForgetPass from '../src/ForgetPass';
import Createacc from '../src/Createacc';
import Recipt from '../src/Recipt';
import ScanRecipt from '../src/ScanRecipt';
import ScanResult from '../src/ScanResult';
import AddRecipt from '../src/AddRecipt';

import Storedetail from '../src/Storedetail';

import Editprofile from '../src/Editprofile';
import AccountHome from '../src/AccountHome';
import SaveRecipt from '../src/SaveRecipt';
import Settingnavi from './Setting-navi';
import Profilenavi from './Profile-navi';
import Marketnavi from './Market-navi';
import Homenavi from './Home-navi';

const Menubar = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused}) => {
          let iconName;
          if (route.name == 'Home') {
            iconName = 'home';
          } else if (route.name == 'Profile') {
            iconName = 'person';
          } else if (route.name == 'Setting') {
            iconName = 'settings';
          } else if (route.name == 'Market') {
            iconName = 'store';
          }

          return (
            <>
              {iconName !== 'store' ? (
                <Ionicons
                  size={30}
                  style={{color: focused ? '#EA7A89' : '#FFCCD3', bottom: 5}}
                  name={iconName}
                />
              ) : (
                <FontAwesome5
                  name={iconName}
                  size={30}
                  style={{color: focused ? '#EA7A89' : '#FFCCD3', bottom: 5}}
                />
              )}
            </>
          );
        },
        tabBarLabel: ({focused, size, color}) => {
          let LabelName;
          if (route.name == 'Home') {
            LabelName = 'Home';
            size = size + 6;
            color = focused ? '#EA7A89' : '#FFCCD3';
          } else if (route.name == 'Market') {
            (LabelName = 'Market'), (size = size + 6);
          } else if (route.name == 'Profile') {
            (LabelName = 'Profile'), (size = size + 6);
          } else if (route.name == 'Setting') {
            (LabelName = 'Setting'), (size = size + 6);
          }
          return (
            <Text style={{color: color, bottom: 10, left: 2}}>{LabelName}</Text>
          );
        },
        tabBarActiveTintColor: '#EA7A89',
        tabBarInactiveTintColor: '#FFCCD3',
        tabBarHideOnKeyboard: true,
        tabBarStyle: {backgroundColor: 'white', height: 70},
      })}>
      <Tab.Screen name="Home" component={Homenavi} />
      <Tab.Screen name="Market" component={Marketnavi} />
      <Tab.Screen name="Profile" component={Profilenavi} />
      <Tab.Screen name="Setting" component={Settingnavi} />
    </Tab.Navigator>
  );
};

export const Navigation = () => {
  const [isloading, setisloading] = useState(true);
  const [usertoken, setUserToken] = useState(null);

  const context = useMemo(() => ({
    signIn: () => {
      setUserToken('KKKK'), setisloading(false);
    },
    signOut: () => {
      setUserToken(null), setisloading(false);
    },
  }));

  useEffect(() => {
    setTimeout(() => {
      setisloading(false);
    }, 500);
  }, []);

  if (isloading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  return (
    <Authcontext.Provider value={context}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Open" component={Opening} />
          <Stack.Screen name="Des" component={Des} />
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Forgetpass" component={ForgetPass} />
          <Stack.Screen name="createaccount" component={Createacc} />
          <Stack.Screen name="Menubar" component={Menubar} />
          <Stack.Screen name="SRecipt" component={ScanRecipt} />
          <Stack.Screen name="ScanResult" component={ScanResult} />
          <Stack.Screen name="Signin" component={SigninUser} />
        </Stack.Navigator>
      </NavigationContainer>
    </Authcontext.Provider>
  );
};
