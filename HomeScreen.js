import { Button, StyleSheet, Text, TextInput, 
    View } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
  
const HomeScreen = () => {
  const [message, setMessage] = useState('');
  const navigation = useNavigation();
  const goToMessageScreen = () => {
    navigation.navigate('Message', {
      message,
    });
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login-Page</Text>
      <TextInput
        placeholder="Enter your message here"
        value={message}
        onChangeText={(text) => setMessage(text)}
        style={styles.input}
      />
      <Button title="Submit" 
      style={styles.button}
        onPress={goToMessageScreen} color="blue" padding='20'  />
    </View>
  );
};
  
export default HomeScreen;
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'blue',
    marginTop: 50,
  },
  input: {
    width: '75%',
    padding: 10,
    marginTop: 20,
    color: '#000',
    borderBottomWidth:1
  },
  button:{
    padding:30
  }
});