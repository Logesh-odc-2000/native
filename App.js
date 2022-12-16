import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import MessageScreen from './MessageScreen';
import { View, Text, StyleSheet } from 'react-native';
import Excerise from './Excerise'
import Ex from './Ex'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <View style={{ padding: 60, flex: 1 }} >
        <Text style={styles.container}>WorkOut App</Text>
        <Text style={{ fontSize: 20, padding: 15, }}>Select WorkOut Week</Text>
        <View style={styles.row}><Text style={styles.textshadow}>Week 1</Text>
          <Text style={styles.textshadow}>Week 2</Text>
        </View>
        <Text style={{ fontSize: 20, padding: 15, }}>Select WorkOut Day</Text>
        <View style={styles.row}>
          <Text style={styles.textshadow1}>Mon</Text>
          <Text style={styles.textshadow2}>Tus</Text>
          <Text style={styles.textshadow3}>Wed</Text>
          <Text style={styles.textshadow4}>Thurs</Text>
          <Text style={styles.textshadow5}>Fri</Text>
        </View>
        <View style={{ borderBottomWidth: 5, padding: 10, borderColor: '#e6e6fa' }} />
        <Text style={{ fontSize: 20, padding: 15, }}>Your WorkOut for Day</Text>
        <View style={ styles.Warm}>
          <Text style={{fontSize:20}}>  Warm Up       -          10 minutes</Text>
        </View>
        <View style={{ borderBottomWidth: 5, padding: 10, borderColor: '#e6e6fa' }} />
      </View>
      
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
    marginBottom: 20,
    fontSize: 30
  },
  textshadow: {
    borderRadius: 10,
    height: 40,
    width: 50,
    borderWidth: 4,
    borderColor: 'blue',
    minWidth: "40%",
    paddingHorizontal: 8,
    paddingVertical: 10,
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    textAlign: "center",
  },
  textshadow1: {
    borderRadius: 10,
    height: 40,
    width: 50,
    borderWidth: 4,
    borderColor: '#ee77ee',
    minWidth: "15%",
    paddingHorizontal: 8,
    paddingVertical: 10,
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    textAlign: "center",
  },
  textshadow2: {
    borderRadius: 10,
    height: 40,
    width: 50,
    borderWidth: 4,
    borderColor: '#f2ed17',
    minWidth: "15%",
    paddingHorizontal: 8,
    paddingVertical: 10,
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    textAlign: "center",
  },
  textshadow3: {
    borderRadius: 10,
    height: 40,
    width: 50,
    borderWidth: 4,
    borderColor: '#ea2119',
    minWidth: "15%",
    paddingHorizontal: 8,
    paddingVertical: 10,
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    textAlign: "center",
  },
  textshadow4: {
    borderRadius: 10,
    height: 40,
    width: 50,
    borderWidth: 4,
    borderColor: '#3ed7c9',
    minWidth: "15%",
    paddingHorizontal: 8,
    paddingVertical: 10,
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    textAlign: "center",
  },
  textshadow5: {
    borderRadius: 10,
    height: 40,
    width: 50,
    borderWidth: 4,
    borderColor: '#05981e',
    minWidth: "15%",
    paddingHorizontal: 8,
    paddingVertical: 10,
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    textAlign: "center",
  },

  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  Warm:{
    borderRadius: 9,
    height:50,
    borderWidth: 4,
    borderColor: '#3ed7c9',
    paddingHorizontal: 8,
    paddingVertical: 8,
     
   
     
    textAlign: "center",
  }

})