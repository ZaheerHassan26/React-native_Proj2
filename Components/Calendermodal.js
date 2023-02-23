import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import CalendarPicker from 'react-native-calendar-picker';
export default function Calendermodal({showcalender, removemodal, Submit}) {
  const [date, setdate] = useState('null');

  const onChange = date => {
    const getDate = new Date(date);
    const newDate = getDate.getDate();
    const newMonth = getDate.getMonth();
    const newyear = getDate.getFullYear();

    let selectedDate = `${newDate}-${newMonth + 1}-${newyear}`.toString();
    console.log(selectedDate);
    if (selectedDate != '') {
      setdate(selectedDate);
    }
  };
  

  return (
    <View style={{backgroundColor: '#000000aa', flex: 1}}>
      <Modal
        style={{
          alignSelf: 'center',
          justifyContent: 'center',
        }}
        transparent={true}
        visible={showcalender}>
        <StatusBar
          backgroundColor={'#000000aa'}
          barStyle={'dark-content'}></StatusBar>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: '#000000aa',
          }}>
          <View style={{backgroundColor: 'white'}}>
            <CalendarPicker
              initialDate="2023-02-10"
              previousTitle="<"
              previousTitleStyle={{color: 'blue', fontSize: 25, left: 20}}
              nextTitle=">"
              nextTitleStyle={{color: 'blue', fontSize: 25, right: 20}}
              selectedDayStyle={{backgroundColor: 'blue'}}
              selectedDayTextStyle={{color: 'white'}}
              todayTextStyle={{color: 'black'}}
              width={320}
              onDateChange={onChange}
            />
            <Pressable
              onPress={() => {
                return Submit(date), removemodal(false);
              }}
              style={{
                alignSelf: 'center',
                backgroundColor: 'blue',
                padding: 6,
                borderRadius: 5,
              }}>
              <Text style={{color: 'white', fontFamily: 'Sora-Regular'}}>
                Save
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({});
