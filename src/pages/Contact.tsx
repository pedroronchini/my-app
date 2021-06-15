import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FirebaseService from '../services/firebaseServices';
import { useState } from 'react';

export default function Contact() {

  const state = {
    dataList: null,
  };

  function componentDidMount() {
      FirebaseService.getDataList('leituras', dataIn => (useState({dataList: dataIn}), 10));
  };

  const navigation = useNavigation();

  function handleBackSchedule() {
    navigation.navigate('Schedule')
  };

  const {dataList} = state;

  return (

    <SafeAreaView style={styles.container}>
      <View style={styles.navbar}>
       <TouchableOpacity onPress={handleBackSchedule}>
          <Text> Back </Text>
       </TouchableOpacity>
      </View>
      <View style={styles.containerInformation}>
        <Text style={styles.textInformation}>
           Nome Completo
        </Text>
        <Text style={styles.textInformation}>
          Telefone
        </Text>
        <Text style={styles.textInformation}>
          Endereço
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#858585',
    alignItems: 'center',
  },

  navbar: {
    width: 350,
    height: 40,
    marginTop: 50,
    justifyContent: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: '#c9c9c9'
  },

  containerInformation: {
    width: 370,
    flexDirection: 'column',
    alignItems: 'baseline',
    justifyContent: 'flex-start',
    padding: 10,
    marginTop: 20,
  },

  textInformation: {
    width: 350,
    marginTop: 10,
    padding: 10,
    fontSize: 18,
    fontWeight: '500',
    color: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#c9c9c9',
  },
});
