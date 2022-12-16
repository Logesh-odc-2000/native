import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
  
const MessageScreen = () => {
  const route = useRoute();
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>The Message Is {route.params.message}</Text>
    </View>
  );
};
  
export default MessageScreen;
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'blue',
    marginTop: 50,
  },
});