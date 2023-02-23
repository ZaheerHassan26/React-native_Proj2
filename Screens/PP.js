import {
  StyleSheet,
  Text,
  View,
  FlatList,
  StatusBar,
  ScrollView,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function PP({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar
        backgroundColor={'white'}
        barStyle={'dark-content'}></StatusBar>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: '2%',
          right: '6.9%',
        }}>
        <AntDesign
          onPress={() => {
            navigation.goBack();
          }}
          name="left"
          size={25}
          color="#B24D5B"
          style={{top: 7, right: '20%'}}
        />
        <Text
          style={{
            color: '#1E1E1E',
            fontFamily: 'Sora-Regular',
            fontSize: 20,
          }}>
          Privacy Policy
        </Text>
      </View>
      <View
        style={{
          paddingBottom: 30,
          borderTopWidth: 2,
          borderTopColor: '#F0F0F0',
          width: '100%',
          alignSelf: 'center',
          top: '3%',
        }}></View>

      <ScrollView style={{flex: 1}}>
        <Text
          style={{
            marginTop: 27,
            width: '85%',
            color: '#1E1E1E',
            fontFamily: 'Sora-Regular',
            alignSelf: 'center',
            fontSize: 16,
          }}>
          The standard Lorem Ipsum passage, used since the 1500s
        </Text>
        <Text
          style={{
            marginTop: '6%',
            width: '85%',
            color: '#1E1E1E',
            fontFamily: 'Sora-Regular',
            alignSelf: 'center',
            fontSize: 16,
          }}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </Text>
        <Text
          style={{
            marginTop: '8%',
            width: '85%',
            fontSize: 16,
            color: '#1E1E1E',
            fontFamily: 'Sora-Regular',
            alignSelf: 'center',
          }}>
          Section 1.10.32 of "de Finibus Bonorum et Malorum"
        </Text>
        <Text
          style={{
            marginTop: '9%',
            width: '85%',
            color: '#1E1E1E',
            fontFamily: 'Sora-Regular',
            alignSelf: 'center',
            paddingBottom: 40,
            fontSize: 16,
          }}>
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?"
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
