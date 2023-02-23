import {FlatList, Image, StyleSheet, Text, View, Pressable} from 'react-native';
import React, {useState} from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

export default function Storecom() {
  const [store, setStore] = useState([
    {
      id: 1,
      image: require('../app/src/imag/back1.png'),
      image2: require('../app/src/imag/Zara.png'),
      des: 'Store Number 1',
      date: 'Last updated: 8/7/2022',
      icon: 'down',
      currency: '$',
      price: '200',
      isOpen: false,
    },
    {
      id: 2,
      image: require('../app/src/imag/back2.png'),
      image2: require('../app/src/imag/b2.png'),
      des: 'Store Number 1',
      date: 'Last updated: 8/7/2022',
      icon: 'down',
      currency: '$',
      price: '150',
      isOpen: false,
    },
    {
      id: 3,
      image: require('../app/src/imag/back3.png'),
      image2: require('../app/src/imag/b3.png'),
      des: 'Store Number 1',
      date: 'Last updated: 8/7/2022',
      icon: 'down',
      currency: '$',
      price: '50',
      isOpen: false,
    },
  
    {
      id: 4,
      image: require('../app/src/imag/b5.png'),
      des: 'Store Number 1',
      date: 'Last updated: 8/7/2022',
      icon: 'down',
      currency: '$',
      price: '50',
      isOpen: false,
    },
  ]);
  const [isOpen, setisOpen] = useState(false);

  const navigation = useNavigation();

  const handleEvent = id => {
    // setStore(!Store);
    setisOpen(!isOpen);
    store.filter(ele => ele.id === id);
  };

  return (
    <View style={{}}>
      <FlatList
        data={store}
        renderItem={({item, index}) => (
          <View
            style={{
              flex: 1,
              paddingBottom: 20,
              width: '95%',
              alignSelf: 'center',
            }}>
            <View
              style={{
                marginVertical: 4,
                flexDirection: 'row',
              }}>
              <View style={{flexDirection: 'row'}}>
                <View style={{alignItems: 'center'}}>
                  <Image style={styles.Image} source={item.image} />
                  <Image style={{bottom: 39}} source={item.image2} />
                </View>
              </View>
              <View
                style={{
                  top: 5,
                  marginHorizontal: '1.5%',
                  width: 120,
                  height: 22,
                }}>
                <Text style={styles.des}>{item.des}</Text>
                <Text style={styles.date}>{item.date}</Text>
              </View>
              <View style={{marginLeft: 40, flexDirection: 'row', top: 0}}>
                <Text
                  style={{
                    color: '#252525',
                    fontSize: 12,
                  }}>
                  {item.currency}
                </Text>
                <Text
                  style={{
                    flexBasis: '20%',
                    fontFamily: 'Sora-Regular',
                    color: '#B24D5B',
                    width: 50,
                    fontSize: 20,
                  }}>
                  {item.price}
                </Text>
              </View>
              <AntDesign
                onPress={() => setStore(
                  (prevState) => {
                    const updatedArr = [...store]
                updatedArr[index].isOpen = !prevState[index].isOpen
                    return updatedArr
                }
                )}
                name={store[index].isOpen ? 'up' : 'down'}
                size={20}
                style={{
                  color: '#252525',
                  marginLeft: '3.5%',
                  height: 30,
                  top: 20,
                }}
              />
            </View>

            {item.isOpen ? (
              <View
                style={{
                  width: '100%',
                  right: '5.9%',
                  paddingBottom: 10,
                  marginHorizontal: 15,
                }}>
                <View>
                  <Text
                    style={{
                      marginRight: 17,
                      alignSelf: 'flex-end',
                      color: '#A5A5A5',
                      marginTop: 17,
                      fontSize: 12,
                    }}>
                    ARCHIVE
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'column',
                    marginLeft: '5%',
                    marginTop: '2%',
                  }}>
                  <View style={{flexDirection: 'row', marginBottom: 5}}>
                    <View>
                      <Text
                        style={{
                          color: '#B24D5B',
                          fontFamily: 'Sore-Regular',
                          fontSize: 14,
                        }}>
                        Store credit 1
                      </Text>
                      <Text
                        style={{
                          color: '#A5A5A5',
                          fontFamily: 'Sore-Regular',
                          fontSize: 12,
                        }}>
                        8/4/2022
                      </Text>
                    </View>
                    <View style={{marginLeft: '40%', flexDirection: 'row'}}>
                      <Text style={{fontSize: 12, color: '#252525'}}>$</Text>
                      <Text
                        style={{
                          fontFamily: 'Sore-Regular',
                          fontSize: 20,
                          color: '#252525',
                        }}>
                        150
                      </Text>
                      <FontAwesome
                        name="archive"
                        size={25}
                        style={{color: '#FC94A2', left: 40, top: 4}}
                      />
                    </View>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: 'column',
                    marginLeft: '5%',
                    marginTop: '2%',
                  }}>
                  <View style={{flexDirection: 'row', marginBottom: 5}}>
                    <View>
                      <Text
                        style={{
                          color: '#B24D5B',
                          fontFamily: 'Sore-Regular',
                          fontSize: 14,
                        }}>
                        Store credit 2
                      </Text>
                      <Text
                        style={{
                          color: '#A5A5A5',
                          fontFamily: 'Sore-Regular',
                          fontSize: 12,
                        }}>
                        8/2/2022
                      </Text>
                    </View>
                    <View style={{marginLeft: '40%', flexDirection: 'row'}}>
                      <Text style={{fontSize: 12, color: '#252525'}}>$</Text>
                      <Text
                        style={{
                          fontFamily: 'Sore-Regular',
                          fontSize: 20,
                          color: '#252525',
                        }}>
                        150
                      </Text>
                      <FontAwesome
                        name="archive"
                        size={25}
                        style={{color: '#FC94A2', left: 40, top: 4}}
                      />
                    </View>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: 'column',
                    marginLeft: '5%',
                    marginTop: '2%',
                  }}>
                  <View style={{flexDirection: 'row', marginBottom: 5}}>
                    <View>
                      <Text
                        style={{
                          color: '#B24D5B',
                          fontFamily: 'Sore-Regular',
                          fontSize: 14,
                        }}>
                        Store credit 3
                      </Text>
                      <Text
                        style={{
                          color: '#A5A5A5',
                          fontFamily: 'Sore-Regular',
                          fontSize: 12,
                        }}>
                        8/2/2022
                      </Text>
                    </View>
                    <View style={{marginLeft: '40%', flexDirection: 'row'}}>
                      <Text style={{fontSize: 12, color: '#252525'}}>$</Text>
                      <Text
                        style={{
                          fontFamily: 'Sore-Regular',
                          fontSize: 20,
                          color: '#252525',
                        }}>
                        150
                      </Text>
                      <FontAwesome
                        name="archive"
                        size={25}
                        style={{color: '#FC94A2', left: 40, top: 4}}
                      />
                    </View>
                  </View>

                  <Pressable
                    style={{
                      backgroundColor: '#FC94A2',
                      width: 180,
                      marginVertical: 4,
                      borderRadius: 30,
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: 40,
                      alignSelf: 'flex-end',
                    }}
                    onPress={() => navigation.navigate('Recipt')}>
                    <Text
                      style={{
                        color: '#FFFFFF',
                        fontSize: 16,
                        fontFamily: 'Sora-Regular',
                        textAlign: 'center',
                      }}>
                      Make payment
                    </Text>
                  </Pressable>
                </View>
              </View>
            ) : (
              ''
            )}
            <View style={{marginBottom: 8}}>
              <View
                style={{
                  borderTopWidth: 1,
                  borderColor: '#F0F0F0',
                  width: '100%',
                  alignSelf: 'center',
                  top: 9,
                }}></View>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Image: {
    width: 60,
    height: 60,
  },
  date: {
    width: 179,
    color: '#A5A5A5',
    fontFamily: 'Sora-Regular',
    fontSize: 12,
  },
  des: {
    fontFamily: 'Sora-Regular',
    color: '#252525',
    fontSize: 16,
  },
});
