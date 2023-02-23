import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
  FlatList,
  StatusBar,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import Menubar from '../../Components/Menubar';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import QrModal from '../../Components/QrModal';
import Profilemodel from '../../Components/Profilemodel';
import Calendermodal from '../../Components/Calendermodal';

const array = [Menubar];
export default function Editprofile({editprofile, Submit, closeEdit}) {
  const genderCategory = ['Male', 'Female'];
 
  const [editProfileLocalState, setEditProfileLocalState] = useState({
    calendershow: false,
    date: 'DOB',
    gender: '',
    city: '',
    country: '',
    zipcode: '',
    fullName: '',
    phone: '',
    email: '',
  });
  const {
    calendershow,
    date,
    gender,
    city,
    country,
    zipcode,
    fullName,
    phone,
    email,
  } = editProfileLocalState;

 

  const [ismodalactive, setismodalactive] = useState(false);
  const [dpactive, setisdpactive] = useState(false);

  const handleEvent = () => {
    setismodalactive(true);
  };

  const Editcity = val =>
    setEditProfileLocalState(prevState => ({
      ...prevState,
      city: val,
    }));
  const EditZipcode = val =>
    setEditProfileLocalState(prevState => ({
      ...prevState,
      zipcode: val,
    }));
  const EditCountry = val =>
    setEditProfileLocalState(prevState => ({
      ...prevState,
      country: val,
    }));
  const EditGender = val =>
    setEditProfileLocalState(prevState => ({
      ...prevState,
      gender: val,
    }));
  const EditFullname = val =>
    setEditProfileLocalState(prevState => ({
      ...prevState,
      fullName: val,
    }));
  const EditPhone = val =>
    setEditProfileLocalState(prevState => ({
      ...prevState,
      phone: val,
    }));
  const EditEmail = val =>
    setEditProfileLocalState(prevState => ({
      ...prevState,
      email: val,
    }));
  // const EditBirth = val => {
  //   setBirth(val);
  // };

  return (
    <Modal visible={editprofile}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <StatusBar
          backgroundColor={'white'}
          barStyle={'dark-content'}></StatusBar>
        <View style={{flexDirection: 'row'}}>
          <Pressable
            style={{flexDirection: 'row'}}
            onPress={() => setisdpactive(true)}>
            <Image
              style={{left: 40, top: 25}}
              source={require('../src/imag/profile.png')}
            />
            <AntDesign
              name={'camera'}
              size={20}
              style={{color: '#EA7A89', top: 55, left: 29}}
            />
          </Pressable>
          <View style={{top: 25, left: 40, width: 230, height: 40}}>
            <Text style={styles.des}>Jane Doe</Text>
            <Text style={styles.date}>Member since October 2022</Text>
          </View>
        </View>

        <Pressable
          onPress={handleEvent}
          style={{
            width: 336,
            height: 46,
            borderColor: '#EA7A89',
            borderWidth: 1.2,
            borderRadius: 100,
            top: 55,
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

        <View style={{flex: 3.2, top: 65, paddingBottom: 50}}>
          <FlatList
            data={array}
            renderItem={() => (
              <View style={{flex: 1, paddingBottom: 80}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    left: '6%',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Sora-Regular',
                      color: '#252525',
                      fontSize: 20,
                    }}>
                    Personal Information
                  </Text>
                </View>

                <View
                  style={{
                    borderTopWidth: 1,
                    borderColor: '#F0F0F0',
                    width: '100%',
                    alignSelf: 'center',
                    top: 15,
                  }}></View>

                <View style={{alignSelf: 'center', marginTop: '6%'}}>
                  <TextInput
                    placeholder="Jane Doe"
                    onChangeText={EditFullname}
                    placeholderTextColor={'#1E1E1E'}
                    style={{
                      paddingLeft: 20,
                      fontFamily: 'Sora-Regular',
                      fontSize: 14,
                      width: 336,
                      height: 46,
                      borderRadius: 50,
                      backgroundColor: '#F5F5F5',
                    }}
                  />
                </View>

                <View style={{alignSelf: 'center', marginTop: '6%'}}>
                  <TextInput
                    placeholder="+123456789"
                    placeholderTextColor={'#1E1E1E'}
                    onChangeText={EditPhone}
                    style={{
                      paddingLeft: 20,
                      fontFamily: 'Sora-Regular',
                      fontSize: 14,
                      width: 336,
                      height: 46,
                      borderRadius: 50,
                      backgroundColor: '#F5F5F5',
                    }}
                  />
                </View>

                <View style={{alignSelf: 'center', marginTop: '6%'}}>
                  <TextInput
                    placeholder="janedoe@gmail.com"
                    onChangeText={EditEmail}
                    placeholderTextColor={'#1E1E1E'}
                    style={{
                      paddingLeft: 20,
                      fontFamily: 'Sora-Regular',
                      fontSize: 14,
                      width: 336,
                      height: 46,
                      borderRadius: 50,
                      backgroundColor: '#F5F5F5',
                    }}
                  />
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignSelf: 'center',
                    marginTop: '6%',
                  }}>
                  <Pressable
                    onPress={() =>  setEditProfileLocalState(prevState => ({
                      ...prevState,
                      calendershow: true
                    }))}
                    style={{
                      paddingTop: 3,
                      backgroundColor: '#F5F5F5',
                      fontFamily: 'Sora-Regular',
                      borderRadius: 50,
                      justifyContent: 'center',
                      width: 158,
                      height: 46,
                      paddingLeft: 20,
                      fontSize: 14,
                    }}>
                    <Text
                      style={{
                        bottom: 4,
                        left: 6,
                        color: '#969696',
                        fontFamily: 'Sora-Regular',
                      }}>
                      {date}
                    </Text>
                  </Pressable>
                  <FontAwesome5
                    name="calendar"
                    size={20}
                    color={'#969696'}
                    style={{top: 10, right: 35}}
                  />
                  <SelectDropdown
                    buttonStyle={{
                      backgroundColor: '#F5F5F5',
                      fontFamily: 'Sora-Regular',
                      borderRadius: 50,
                      color: '#F5F5F5',
                      justifyContent: 'center',
                      width: 158,
                      height: 46,
                    }}
                    data={genderCategory}
                    renderDropdownIcon={() => {
                      return (
                        <AntDesign name="down" size={19} style={{left: 8}} />
                      );
                    }}
                    // dropdownIconPosition="right"
                    defaultButtonText={'Gender'}
                    dropdownStyle={{
                      backgroundColor: '#F5F5F5',
                      fontFamily: 'Sora-Regular',
                      justifyContent: 'center',
                    }}
                    buttonTextStyle={{fontFamily: 'Sora-Regular'}}
                    onSelect={val =>  setEditProfileLocalState(prevState => ({
                      ...prevState,
                      gender: val
                    }))}
                  />
                </View>

                <View
                  style={{
                    marginTop: '4%',
                    left: '6%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Sora-Regular',
                      color: '#252525',
                      fontSize: 20,
                    }}>
                    Address Information
                  </Text>
                </View>

                <View
                  style={{
                    borderTopWidth: 1,
                    borderColor: '#F0F0F0',
                    width: '100%',
                    alignSelf: 'center',
                    marginTop: 10,
                  }}></View>

                <View style={{alignSelf: 'center', marginTop: '5%'}}>
                  <TextInput
                    placeholder="City"
                    placeholderTextColor={'#969696'}
                    onChangeText={Editcity}
                    style={{
                      paddingLeft: 20,
                      fontFamily: 'Sora-Regular',
                      fontSize: 14,
                      width: 336,
                      height: 46,
                      borderRadius: 50,
                      backgroundColor: '#F5F5F5',
                    }}
                  />
                </View>

                <View style={{alignSelf: 'center', marginTop: '5%'}}>
                  <TextInput
                    placeholder="Country"
                    placeholderTextColor={'#969696'}
                    onChangeText={EditCountry}
                    style={{
                      paddingLeft: 20,
                      fontFamily: 'Sora-Regular',
                      fontSize: 14,
                      width: 336,
                      height: 46,
                      borderRadius: 50,
                      backgroundColor: '#F5F5F5',
                    }}
                  />
                </View>

                <View style={{alignSelf: 'center', marginTop: '5%'}}>
                  <TextInput
                    placeholder="Zip Code"
                    onChangeText={EditZipcode}
                    placeholderTextColor={'#969696'}
                    style={{
                      paddingLeft: 20,
                      fontFamily: 'Sora-Regular',
                      fontSize: 14,
                      width: 336,
                      height: 46,
                      borderRadius: 50,
                      backgroundColor: '#F5F5F5',
                    }}
                  />
                </View>

                <Pressable
                  onPress={() => {
                    return (
                      Submit(city, country, zipcode, date, gender),
                      closeEdit(false)
                    );
                  }}
                  style={{
                    marginBottom: 10,
                    width: 336,
                    height: 46,
                    backgroundColor: '#EA7A89',
                    borderColor: '#EA7A89',
                    borderWidth: 1.2,
                    borderRadius: 100,
                    marginTop: '5%',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      bottom: 3,
                      color: 'white',
                      fontFamily: 'Sora-Regular',
                      fontSize: 16,
                    }}>
                    Save
                  </Text>
                </Pressable>
                <Profilemodel
                  ismodalactive={dpactive}
                  closemodel={() => setisdpactive(false)}
                  des={'Upload photo'}
                />
                <QrModal
                  ismodalactive={ismodalactive}
                  closemodel={() => setismodalactive(false)}
                />
                <Calendermodal
                  showcalender={calendershow}
                  removemodal={() => setEditProfileLocalState(prevState => ({
                    ...prevState,
                    calendershow: false
                  }))}
                  Submit={selecteddate =>  setEditProfileLocalState(prevState => ({
                    ...prevState,
                    date: selecteddate
                  }))}
                />
              </View>
            )}
          />
        </View>
      </View>
    </Modal>
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
