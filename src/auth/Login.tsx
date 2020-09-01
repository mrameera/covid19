import React ,{ useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,ActivityIndicator ,Alert,Image} from 'react-native';
import { ApiCaller } from '../ApiCaller'
import { NavigationContainer } from '@react-navigation/native';
import AppRoutre from '../AppRouter';
import { Button as GaButton ,Icon,theme} from 'galio-framework';
import * as Facebook from 'expo-facebook';
import Expo from "expo"
import * as Google from 'expo-google-app-auth';

 const  Login =()=>{

  const [email,setEmail] = useState <String >('');
  const [password,setPassword] = useState <String >('');
  const [loading,setLoading] = useState<Boolean>(false);
  const [isLoggedin, setLoggedinStatus] = useState(false);
  const [userData, setUserData] = useState(null);
  const [isImageLoading, setImageLoadStatus] = useState(false);

  const LoginApi = () =>{
    setLoading(true);
    //the api link here
    ApiCaller.post('login', {
      email: email,
      password: password,
  })
  .then(function (response) {
      
     // NavigationService.navigate('Dashboard');
      // NavigationService.navigate('Login', { param1: 'a', param2: 'b'  });
      console.log("login succes");
      setLoading(false);
  })
  .catch(function (error) {
      // handle error
      if (error.response) {
        console.log("error email or password")
        setLoading(false);
      }
  })
  .then(function () {
     // dispatch(changeLoading(false))
  });

}
 
//3235688829831771

async function facebookLogIn() {
  try {
    await Facebook.initializeAsync('3235688829831771');
    const {
      type,
      token,
      expires,
      permissions,
      declinedPermissions,
    } = await Facebook.logInWithReadPermissionsAsync({
      permissions: ['public_profile','email'],

    });
    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,picture.height(500)`)
          .then(response => response.json())
          .then(data => {
            setLoggedinStatus(true);
            setUserData(data);
            if(userData != null){
              console.log(userData.email);
              setEmail(userData.email)
              RegisterusingEmail();
            }

          })
    } else {
      // type === 'cancel'
    }
  } catch ({ message }) {
    alert(`Facebook Login Error: ${message}`);
  }
}
  
  //rigster for facebook email && gmail email condetions if exis ret sucses if not 
  //exist rigster and ret sucses you hav apilty to chang password using the app
  const RegisterusingEmail=()=>{
      setLoading(true);
      //the api link here
      ApiCaller.post('regsterfacebook', {
        email: email,
      })
    .then(function (response) {
      //send user to dashbord
      // NavigationService.navigate('Dashboard');
        // NavigationService.navigate('Login', { param1: 'a', param2: 'b'  });
        console.log("login succes");
        setLoading(false);
    })
    .catch(function (error) {
        // handle error
        if (error.response) {
          console.log("error email or password")
          setLoading(false);
        }
    })
    .then(function () {
      // dispatch(changeLoading(false))
    });
    
  }

  //google login stuff
   async function googleLogIn() {
  try {
    const result = await Google.logInAsync({
      androidClientId: "1086853124913-qeh36okolkjt6fpbku7k8grkdid9889l.apps.googleusercontent.com",
      //iosClientId: YOUR_CLIENT_ID_HERE,
      scopes: ['profile', 'email'],
    });

    if (result.type === 'success') {
       console.log(result);
       console.log(result.user.email);
       setEmail(result.user.email)
       RegisterusingEmail();
      return result.accessToken;
    } else {
      return { cancelled: true };
    }
  } catch (e) {
    return { error: true };
  }
}
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
        
        <View style={{flexDirection: 'row', justifyContent: 'center', paddingVertical: 20}}>
          <GaButton
            round
            onlyIcon
            shadowless
            icon="googleplus"
            iconFamily="AntDesign"
            iconColor= 'white'
            iconSize={theme.SIZES.BASE * 1.4}
            color={"rgb(221, 75, 57)"}
            style={[styles.social, styles.shadow]}
            onPress={()=>{googleLogIn()}}
          />
          <GaButton
            round
            onlyIcon
            shadowless
            icon="facebook"
            iconFamily="Font-Awesome"
            iconColor= 'white'
            iconSize={theme.SIZES.BASE * 1.4}
            color={"rgb(11, 37, 202)"}
            style={[styles.social, styles.shadow]}
            onPress={()=>{facebookLogIn()}}
          />
           
        </View> 
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
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}
          onPress={() => LoginApi()}
        >
          <Text style={styles.loginText}>LOGIN</Text> 
        </TouchableOpacity>
        <TouchableOpacity 
                
                >
          <Text style={styles.loginText}>Signup</Text>
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
  loginBtn:{
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
export default Login;

//android key
//1086853124913-qeh36okolkjt6fpbku7k8grkdid9889l.apps.googleusercontent.com