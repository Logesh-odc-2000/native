import React from 'react';
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';

const Logo=(props)=>{
  return(
    <Text>Hi Am Logesh{props.name}</Text>
  )
}

const App = () => {
  return (
    < View style={{paddingRight:10,paddingLeft:20,paddingTop:40,
    margin:10}}>
      <Text>Som text</Text>
      <Logo name='ManoLogesh'/>
        <Text>Some more text</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={styles.width}
        />
     
      <TextInput
        style={styles.input}
        defaultValue="You can type in me"
      />
    </View>
  );
}

export default App;


const styles= StyleSheet.create({
  input:{ height: 40,
    borderColor: 'gray',
    borderWidth: 1},
    img:{
       width: 200, height: 200 
    }
})