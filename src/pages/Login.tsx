import React from 'react';
import {  StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();

  function handleLogin() {
    navigation.navigate('Schedule');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Seja bem-vindo!</Text>
      <Text style={styles.subtitle}>Faça login para continuar</Text>
      <TouchableOpacity style={styles.btnLoginFacebook} onPress={handleLogin}>
        <Text style={styles.textWhite} >
          Facebook
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#858585',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    marginLeft: 40,
    marginRight: 40
  },

  subtitle: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    color: '#fff',
    marginBottom: 50,
  },

  btnLoginFacebook: {
    width: 316,
    padding: 10,
    margin: 10,
    borderRadius: 14,
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#3b5998',
  },

  text: {
    textAlign:'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000'
  },

  textWhite: {
    textAlign:'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  },

  icon: {
    width: 100,
  }
});
