import React ,{ useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity,ActivityIndicator ,Image} from 'react-native';
import { ApiCaller } from '../ApiCaller'
  const  Prevention =()=>{
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
                 protection methods 
           </Text>
        </View> 

        <ScrollView style={{flexDirection: 'column', backgroundColor: '#003f5c'}}>
            <View style={styles.dataContainer}>
                <View style={styles.styleColumn}>
                    <View style={styles.imgStyle}>
                        <Image
                            style={{width:100, height:100}}
                            source={require('../../assets/prevention.png')}
                        />
                            <Text style={{color:"white"}}> لا تقم تحت أي ظرف من الظروف برش أو إدخال مبيض أو أي معقم
                            آخر إلى جسمك. هذه المواد قد تكون سامة إذا تم ابتلاعها وقد تسبب تهيجاً
                            وتلفاً للبشرة والعينين. يجب استخدام المبيض والمعقم بحذر لتعقيم الأسطح فقط.
                            وتذكّر أن تبقي الكلور (المبيض) والمطهرات الأخرى بعيدا عن متناول الأطفال.
                            </Text>
                     </View>
                        
                </View>   
                    {/* ////////// */}
                    <View style={styles.styleColumn}>
                    <View style={styles.imgStyle}>
                        <Image
                            style={{width:100, height:100}}
                            source={require('../../assets/prevention.png')}
                        />
                            <Text style={{color:"white"}}> لا تقم تحت أي ظرف من الظروف برش أو إدخال مبيض أو أي معقم
                            آخر إلى جسمك. هذه المواد قد تكون سامة إذا تم ابتلاعها وقد تسبب تهيجاً
                            وتلفاً للبشرة والعينين. يجب استخدام المبيض والمعقم بحذر لتعقيم الأسطح فقط.
                            وتذكّر أن تبقي الكلور (المبيض) والمطهرات الأخرى بعيدا عن متناول الأطفال.
                            </Text>
                     </View>
                        
                </View>   
                    {/* ////////// */}
                    <View style={styles.styleColumn}>
                    <View style={styles.imgStyle}>
                        <Image
                            style={{width:100, height:100}}
                            source={require('../../assets/prevention.png')}
                        />
                            <Text style={{color:"white"}}> لا تقم تحت أي ظرف من الظروف برش أو إدخال مبيض أو أي معقم
                            آخر إلى جسمك. هذه المواد قد تكون سامة إذا تم ابتلاعها وقد تسبب تهيجاً
                            وتلفاً للبشرة والعينين. يجب استخدام المبيض والمعقم بحذر لتعقيم الأسطح فقط.
                            وتذكّر أن تبقي الكلور (المبيض) والمطهرات الأخرى بعيدا عن متناول الأطفال.
                            </Text>
                     </View>
                        
                </View>   
                    {/* ////////// */}
                    <View style={styles.styleColumn}>
                    <View style={styles.imgStyle}>
                        <Image
                            style={{width:100, height:100}}
                            source={require('../../assets/prevention.png')}
                        />
                            <Text style={{color:"white"}}> لا تقم تحت أي ظرف من الظروف برش أو إدخال مبيض أو أي معقم
                            آخر إلى جسمك. هذه المواد قد تكون سامة إذا تم ابتلاعها وقد تسبب تهيجاً
                            وتلفاً للبشرة والعينين. يجب استخدام المبيض والمعقم بحذر لتعقيم الأسطح فقط.
                            وتذكّر أن تبقي الكلور (المبيض) والمطهرات الأخرى بعيدا عن متناول الأطفال.
                            </Text>
                     </View>
                        
                </View>   
                    {/* ////////// */}
                    <View style={styles.styleColumn}>
                    <View style={styles.imgStyle}>
                        <Image
                            style={{width:100, height:100}}
                            source={require('../../assets/prevention.png')}
                        />
                            <Text style={{color:"white"}}> لا تقم تحت أي ظرف من الظروف برش أو إدخال مبيض أو أي معقم
                            آخر إلى جسمك. هذه المواد قد تكون سامة إذا تم ابتلاعها وقد تسبب تهيجاً
                            وتلفاً للبشرة والعينين. يجب استخدام المبيض والمعقم بحذر لتعقيم الأسطح فقط.
                            وتذكّر أن تبقي الكلور (المبيض) والمطهرات الأخرى بعيدا عن متناول الأطفال.
                            </Text>
                     </View>
                        
                </View>   
                    {/* ////////// */}
                    <View style={styles.styleColumn}>
                    <View style={styles.imgStyle}>
                        <Image
                            style={{width:100, height:100}}
                            source={require('../../assets/prevention.png')}
                        />
                            <Text style={{color:"white"}}> لا تقم تحت أي ظرف من الظروف برش أو إدخال مبيض أو أي معقم
                            آخر إلى جسمك. هذه المواد قد تكون سامة إذا تم ابتلاعها وقد تسبب تهيجاً
                            وتلفاً للبشرة والعينين. يجب استخدام المبيض والمعقم بحذر لتعقيم الأسطح فقط.
                            وتذكّر أن تبقي الكلور (المبيض) والمطهرات الأخرى بعيدا عن متناول الأطفال.
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

export default Prevention;