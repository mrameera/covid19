import React ,{ useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,ActivityIndicator ,Alert,Image} from 'react-native';
import { ApiCaller } from '../ApiCaller'
import { NavigationContainer } from '@react-navigation/native';
import AppRoutre from '../AppRouter';
import { Button as GaButton ,Icon,theme} from 'galio-framework';
import * as Facebook from 'expo-facebook';
import Expo from "expo"
import * as Google from 'expo-google-app-auth';

 const  Register =()=>{

  const [email,setEmail] = useState <String >('');
  const [password,setPassword] = useState <String >('');
  const [loading,setLoading] = useState<Boolean>(false);
  
  //return from the all code
if(loading){
  return(
    <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size="large" color="#00ff00" />
  </View>
  );
}else{
    return (
      <View style={styles.container}>  
        <View style={{
                alignItems:"center",
                justifyContent:"center",
                marginTop:40,
                marginBottom:10
              }}>
           <Image
            style={{width:150, height:150}}
            source={require('../../assets/covid1.png')}
          />
    </View>

        <View style={{flexDirection: 'column', justifyContent: 'center' }}>
            <Text style={styles.loginText}> Devbox Business Solutions</Text>
        
       
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => setEmail(text)}
            value = {email}/>
            
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => setPassword(text)}/>
        </View>
    
        <TouchableOpacity style={styles.RegisterBtn}
          //onPress={() => LoginApi()}
        >
          <Text style={styles.loginText}>Register</Text> 
        </TouchableOpacity>
      </View>
    );
  }
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  RegisterBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }
});
export default Register;

 