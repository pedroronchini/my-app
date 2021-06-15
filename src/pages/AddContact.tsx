import React from 'react';
import { useState } from 'react';
import { Text, View, SafeAreaView, TextInput, StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';


export default function AddContact () {

  const state = {
    cep: '',
    dados: {
      logradouro: '',
      complemento: '',
      bairro: '',
      localidade: '',
      uf: '',
    }
  }

  const searchCep = () => {
    fetch(`https://viacep.com.br/ws/${state.cep}/json/`).then(res => res.json()).then(data => {
      useState({
        dados: data
      });
    }).catch(err => {
      console.log(err);
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        style={styles.container} 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.containerForm}>
          <Text style={styles.label}>
            Nome
          </Text>
          <TextInput style={styles.input} placeholder="Nome" />

          <Text style={styles.label}>
            Telefone
          </Text>
          <TextInput style={styles.input} placeholder="Telefone" />

          <Text style={styles.label}>
            CEP
          </Text>
          <TextInput style={styles.input} placeholder="CEP" value={state.cep} onChangeText={cep => useState(cep)} />
          <TouchableOpacity onPress={searchCep} style={styles.searchButton}>
            <Text style={styles.label}>
              Buscar
            </Text>
          </TouchableOpacity>

          <Text style={styles.label}>
            Estado
          </Text>
          <TextInput style={styles.input} placeholder="Estado" value={state.dados.uf} />

          <Text style={styles.label}>
            Cidade
          </Text>
          <TextInput style={styles.input} placeholder="Cidade" value={state.dados.localidade} />

          <Text style={styles.label}>
            Rua
          </Text>
          <TextInput style={styles.input} placeholder="Rua" value={state.dados.logradouro} />

          <Text style={styles.label}>
            Número
          </Text>
          <TextInput style={styles.input} placeholder="Número" />

          <Text style={styles.label}>
            Bairro
          </Text>
          <TextInput style={styles.input} placeholder="Bairro" value={state.dados.bairro} />

          <Text style={styles.label}>
            Complemento
          </Text>
          <TextInput style={styles.input} placeholder="Complemento" value={state.dados.complemento} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#858585',
    alignItems: 'center',
  },

  containerForm: {
    width: 350,
    height: 40,
    marginTop: 50,
    justifyContent: 'flex-start',
  },

  label: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
  },

  input: {
    width: 350,
    height: 35,
    padding: 10,
    marginTop: 10,
    borderColor: '#c9c9c9',
    borderWidth: 1,
    borderRadius: 13,
    textAlign: 'center',
    color: '#fff',
    fontSize: 14,
  },

  searchButton: {
    width: 350,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#c9c9c9',
    textAlign: 'center'
  },
});