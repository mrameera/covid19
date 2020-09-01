import React ,{ useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,ActivityIndicator ,Image} from 'react-native';
import { ApiCaller } from '../ApiCaller'
  const  Dashboard =()=>{


   return(
       <View style = {styles.container}>
         <View style={styles.styleColumn}>
           <View style={styles.imgStyle}>
              <Image
                style={{width:100, height:100}}
                source={require('../../assets/prevention.png')}
              />
              <Text style={{color:"white"}}> Prevention methods</Text>
           </View>
           <View style={styles.imgStyle}>
              <Image
                style={{width:100, height:100}}
                source={require('../../assets/food.png')}
              />
              <Text style={{color:"white"}}> Food for immunity</Text>
           </View>
         </View>   
         {/* ///////// */}
         <View style={styles.styleColumn}>
           <View style={styles.imgStyle}>
              <Image
                style={{width:100, height:100}}
                source={require('../../assets/home.png')}
              />
              <Text style={{color:"white"}}> Stay home counter</Text>
           </View>
           <View style={styles.imgStyle}>
              <Image
                style={{width:100, height:100}}
                source={require('../../assets/phone.png')}
              />
              <Text style={{color:"white",textAlign: 'center'}}> Emergency numbers</Text>
           </View>
         </View>   
         {/* ///////// */}
         <View style={styles.styleColumn}>
           <View style={styles.imgStyle}>
              <Image
                style={{width:100, height:100}}
                source={require('../../assets/virus.png')}
              />
              <Text style={{color:"white",textAlign: 'center'}}> Cases near me</Text>
           </View>
           <View style={styles.imgStyle}>
              <Image
                style={{width:100, height:100}}
                source={require('../../assets/coronatest.png')}
              />
               <Text style={{color:"white",textAlign: 'center'}}> Corona Test</Text>
           </View>
         </View>   
         {/* ///////// */}
         <View style={styles.styleColumn}>
           <View style={styles.imgStyle}>
              <Image
                style={{width:100, height:100}}
                source={require('../../assets/time.png')}
              />
              <Text style={{color:"white",textAlign: 'center'}}>Ideas for spending time</Text>
           </View>
           <View style={styles.imgStyle}>
              <Image
                style={{width:100, height:100}}
                source={require('../../assets/stat.png')}
              />
              <Text style={{color:"white",textAlign: 'center'}}>Statistics</Text>
           </View>
         </View>   
       </View>
   );
  

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
  },styleColumn:{
    flexDirection: 'row', justifyContent: 'center',width:"100%", 
  },
  imgStyle:
  {width:"45%",
  alignItems:"center",
  justifyContent:"center",borderWidth: 1,borderColor: '#F44336',padding:15,margin:5 
}
});
export default Dashboard;