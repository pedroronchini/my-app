import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Schedule() {

  const navigation = useNavigation();

  function handleBackLogin() {
    navigation.navigate('Login');
  };

  function handleAddContact() {
    navigation.navigate('AddContact');
  };

  function handleInformationContact() {
    navigation.navigate('Contact');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navbar}>
        <View style={styles.navbarTitle}>
          <Text style={styles.navbarText}>
              Pedro
          </Text>
          <TouchableOpacity onPress={handleBackLogin}>
            <Text style={styles.navbarTextButton}>
              Sair
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.containerSchedule}>
        <TouchableOpacity onPress={handleInformationContact}>
          <Text style={styles.scheduleText}>Name</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerAddContact}>
        <TouchableOpacity onPress={handleAddContact} style={styles.addContact}>
          <Text style={styles.textButtonAdd}>
            Adicionar contato
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#858585',
    alignItems: 'center',
  },

  navbar: {
    width: 350,
    height: 40,
    margin: 50,
    justifyContent: 'center',
  },

  navbarTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: 15,
    borderBottomColor: '#c9c9c9',
    borderBottomWidth: 1
  },

  navbarText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },


  navbarTextButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f21827'
  },

  containerSchedule: {
    width: 350,
    flexDirection: 'column',
    alignItems: 'baseline',
    justifyContent: 'flex-start',
    borderBottomColor: '#c9c9c9',
    borderBottomWidth: 1,
  },

  scheduleText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#fff',
  },

  containerAddContact: {
    alignItems: 'flex-end',
  },

  addContact: {
    width: 350,
    height: 50,
    margin: 10,
    borderRadius: 13,
    padding: 10,
    backgroundColor: '#2e25e6',
  },

  textButtonAdd: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});
