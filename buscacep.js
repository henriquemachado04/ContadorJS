import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Pressable, TextInput } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')

  const handlerSum = () => setCount(count + 1)
  const handlerSub = () => setCount(count - 1)
  const handlertext = (text) => setText(text)

  return (
    <View style={styles.container}> 
      <Text style={styles.title}>Contador!</Text>
      <Text>O valor do Contador é: {count}</Text>
      <Pressable style={styles.botao} onPress={handlerSum}>Somar</Pressable>
      <Pressable style={styles.botao} onPress={handlerSub}>Subtrair</Pressable>
      <TextInput style={styles.input} placeholder= 'Digite aqui' onChangeText={handlertext}/>
      <Text>O texto digitado é {text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 50,
    color: '#0d224a'
    
  },

  botao: {
    color: '#ffff',
    textAlign: 'center',
    backgroundColor: '#0d224a',
    borderRadius: 10,
    fontSize: 30,
    marginTop: 10,
    width: 130,
    position: 'relative'
  },
  input: {
    color: '#fffff',
    textAlign: 'center',
    backgroundColor: '#0d224a',
    borderRadius: 10,
    marginTop: 10,
    padding: 10,  
  }
});