import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  StatusBar,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import QrModal from '../../Components/QrModal';
import Editprofile from './Editprofile';

export default function Profile() {
  const [ismodalactive, setismodalactive] = useState(false);
  const [Profilemodel, setProfilemodel] = useState(false);

  const [details, setDetails] = useState({
    date: 'N/A',
    gender: 'N/A',
    city: 'N/A',
    zipCode: 'N/A',
    country: 'N/A',
    fullName: 'Jane Doe',
    phone: ' +123456789',
    email: 'janedoe@gmail.com',
  });

  const {fullName, phone, email, date, gender, city, zipCode, country} =
    details;

  const handleEvent = () => {
    setismodalactive(true);
  };
  const editprofile = () => {
    setProfilemodel(true);
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar
        backgroundColor={'white'}
        barStyle={'dark-content'}></StatusBar>

      <View style={{left: '4%', flexDirection: 'row'}}>
        <Image style={{top: 25}} source={require('../src/imag/profile.png')} />
        <AntDesign
          name={'camera'}
          size={20}
          style={{color: '#EA7A89', top: 55, right: '19%'}}
        />
        <View style={{top: 25, width: 230, height: 40}}>
          <Text style={styles.des}>Jane Doe</Text>
          <Text style={styles.date}>Member since October 2022</Text>
        </View>
        <MaterialIcons
          onPress={editprofile}
          name={'edit'}
          size={25}
          style={{color: '#EA7A89', top: 28}}
        />
      </View>
      <Pressable
        onPress={handleEvent}
        style={{
          width: 336,
          height: 46,
          borderColor: '#EA7A89',
          borderWidth: 1.2,
          borderRadius: 100,
          marginTop: 45,
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row'}}>
          <FontAwesome5 name="qrcode" size={20} style={{color: '#EA7A89'}} />
          <Text
            style={{
              bottom: 3,
              left: 9,
              color: '#EA7A89',
              fontFamily: 'Sora-Regular',
              fontSize: 16,
            }}>
            My QR code
          </Text>
        </View>
      </Pressable>

      <ScrollView style={{flex: 1}}>
        <View style={{marginTop: 28}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                left: 30,
                fontFamily: 'Sora-Regular',
                color: '#252525',
                fontSize: 18,
              }}>
              Personal Information
            </Text>
          </View>

          <View
            style={{
              marginTop: 20,
            }}>
            <Text
              style={{
                left: 30,
                fontFamily: 'Sora-Regular',
                color: '#818080',
                fontSize: 12,
              }}>
              Full Name:
            </Text>
            <Text
              style={{
                left: 30,
                fontFamily: 'Sora-Regular',
                color: '#1E1E1E',
                fontSize: 14,
              }}>
              {fullName}
            </Text>
          </View>
          <View
            style={{
              marginTop: 20,
            }}>
            <Text
              style={{
                left: 30,
                fontFamily: 'Sora-Regular',
                color: '#818080',
                fontSize: 12,
              }}>
              Phone Number:
            </Text>
            <Text
              style={{
                top: 2,
                left: 30,
                fontFamily: 'Sora-Regular',
                color: '#1E1E1E',
                fontSize: 14,
              }}>
              {phone}
            </Text>
          </View>
          <View
            style={{
              marginTop: 20,
            }}>
            <Text
              style={{
                left: 30,
                fontFamily: 'Sora-Regular',
                color: '#818080',
                fontSize: 12,
              }}>
              Email Address:
            </Text>
            <Text
              style={{
                top: 2,
                left: 30,
                fontFamily: 'Sora-Regular',
                color: '#1E1E1E',
                fontSize: 14,
              }}>
              {email}
            </Text>
          </View>
          <View
            style={{
              marginTop: 20,
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <View>
              <Text
                style={{
                  left: 30,
                  fontFamily: 'Sora-Regular',
                  color: '#818080',
                  fontSize: 12,
                }}>
                Date of Birth:
              </Text>
              <Text
                style={{
                  top: 2,
                  left: 30,
                  fontFamily: 'Sora-Regular',
                  color: '#1E1E1E',
                  fontSize: 14,
                }}>
                {date}
              </Text>
            </View>

            <View>
              <Text
                style={{
                  right: 50,
                  fontFamily: 'Sora-Regular',
                  color: '#818080',
                  fontSize: 12,
                }}>
                Gender:
              </Text>
              <Text
                style={{
                  top: 2,
                  right: 50,
                  fontFamily: 'Sora-Regular',
                  color: '#1E1E1E',
                  fontSize: 14,
                }}>
                {gender}
              </Text>
            </View>
          </View>

          <View
            style={{
              marginTop: 31,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                left: 30,
                fontFamily: 'Sora-Regular',
                color: '#252525',
                fontSize: 18,
              }}>
              Address Information
            </Text>
          </View>

          <View
            style={{
              marginTop: 18,
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <View>
              <Text
                style={{
                  left: 30,
                  fontFamily: 'Sora-Regular',
                  color: '#818080',
                  fontSize: 12,
                }}>
                City:
              </Text>
              <Text
                style={{
                  top: 2,
                  left: 30,
                  fontFamily: 'Sora-Regular',
                  color: '#1E1E1E',
                  fontSize: 14,
                }}>
                {city}
              </Text>
            </View>

            <View>
              <Text
                style={{
                  right: 50,
                  fontFamily: 'Sora-Regular',
                  color: '#818080',
                  fontSize: 12,
                }}>
                Zip Code
              </Text>
              <Text
                style={{
                  top: 2,
                  right: 50,
                  fontFamily: 'Sora-Regular',
                  color: '#1E1E1E',
                  fontSize: 14,
                }}>
                {zipCode}
              </Text>
            </View>
          </View>

          <View style={{marginTop: 38}}>
            <Text
              style={{
                left: 30,
                fontFamily: 'Sora-Regular',
                color: '#818080',
                fontSize: 12,
              }}>
              Country
            </Text>
            <Text
              style={{
                paddingBottom: 40,
                top: 2,
                left: 30,
                fontFamily: 'Sora-Regular',
                color: '#1E1E1E',
                fontSize: 14,
              }}>
              {country}
            </Text>
          </View>
        </View>
      </ScrollView>
      <QrModal
        ismodalactive={ismodalactive}
        closemodel={() => setismodalactive(false)}
      />
      <Editprofile
        Submit={(city, coun, zip, birth, gender) => {
          if (city !== '') {
            setDetails(PrevState => ({
              ...PrevState,
              birth: birth,
              country: coun,
              city: city,
              zipCode: zip,
              gender: gender,
            }));
          }
        }}
        editprofile={Profilemodel}
        closeEdit={val => setProfilemodel(val)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Image: {
    left: 30,
    top: 20,
    width: 76,
    height: 76,
  },
  date: {
    color: '#A5A5A5',
    fontFamily: 'Sora-Regular',
    fontSize: 13,
  },
  des: {
    fontFamily: 'Sora-Regular',
    color: '#252525',
    fontSize: 20,
  },
});
