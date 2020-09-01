import React ,{ useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity,ActivityIndicator ,Image} from 'react-native';
import { ApiCaller } from '../ApiCaller'
  const  EmergencyNumbers =()=>{
//     <View style={styles.headerContainer}>
//     <Image
//       source={require('../../assets/prevention.png')} 
//       style={{width: 90, height: 90, margin: 0, borderWidth: 3, borderColor: '#fff', borderRadius: 40}}
//     />
//   </View>

   return(
    <View style={{backgroundColor: "#003f5c", height: '100%',justifyContent:"center"}}>

        <View style={{flexDirection: 'row', paddingTop: 40,justifyContent:"center"}}>
            <Text style={{
                color:"white",justifyContent:"center" ,
                fontSize:25,paddingTop:30,paddingBottom:10}}>
                 Emergency Numbers 
           </Text>
        </View> 

        <ScrollView style={{flexDirection: 'column', backgroundColor: '#003f5c'}}>
            <View style={styles.dataContainer}>
                <View style={{
                    flexDirection: 'row', justifyContent: 'center',
                    width:"100%", paddingBottom :15}}>
                        <Image
                            style={{width:100, height:100}}
                            source={require('../../assets/phone.png')} >

                         </Image>
                        
                </View>   
            {/* ////////// */}    
            <View style={styles.styleColumn}>
                    <View style={styles.imgStyle}>
                        
                            <Text style={{fontSize:18,color:"white",marginTop :20,marginBottom :20}}>الاتصال   بالاسعاف : 101
                            </Text>
                     </View>
                </View>   
            {/* ////////// */} 
            <View style={styles.styleColumn}>
                    <View style={styles.imgStyle}>
                        
                            <Text style={{fontSize:18,color:"white",marginTop :20,marginBottom :20}}>الاتصال   بالدفاع المدني : 102
                            </Text>
                     </View>
                </View>   
            {/* ////////// */} 
            <View style={styles.styleColumn}>
                    <View style={styles.imgStyle}>
                        
                            <Text style={{fontSize:18,color:"white",marginTop :20,marginBottom :20}}>الاتصال   بالشرطة   : 100
                            </Text>
                     </View>
                </View>   
            {/* ////////// */} 
            <View style={styles.styleColumn}>
                    <View style={styles.imgStyle}>
                        
                            <Text style={{fontSize:18,color:"white",marginTop :20,marginBottom :20}}>الاتصال   بلجنة الطوارى   : 02256987
                            </Text>
                     </View>
                </View>   
            {/* ////////// */} 

            </View>
         </ScrollView>    
        </View>
        )}

const styles = StyleSheet.create({
headerContainer: {
  paddingHorizontal: 20,
  paddingBottom: 10,
  padding: 0,
  margin: 0
},
dataContainer: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
},
styleColumn:{
    flexDirection: 'row', justifyContent: 'center',width:"100%", 
  },
  imgStyle:
  {width:"90%",
  alignItems:"center",
  justifyContent:"center",borderWidth: 1,borderColor: '#F44336',padding:15,margin:5 
}
});

export default EmergencyNumbers;