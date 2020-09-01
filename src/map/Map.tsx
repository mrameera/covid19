import React, {useState, useEffect} from 'react';
 import { View, StyleSheet, Platform, Dimensions, Image } from 'react-native';
//import {Marker} from 'react-native-maps';
import * as Location  from 'expo-location';
import * as Permissions from 'expo-permissions'
import MapView ,{ Polyline, Marker, AnimatedRegion }from 'react-native-maps';
//import {Callapi} from './Callapi';


// TODO: show go To my Location button on map

const Map = () => {

  const [polylinecoordinates, setPolylinecoordinates] = useState([]);

  const [counter, setCounter] = useState(0);

  const [firstPosition ,setFirstPosition] = useState(false);

  const [region, setRegion] = useState({
    latitude: Number,
    longitude: Number,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01
  });
 
  useEffect(
    () => {
      const id= setTimeout(() => {
         // getLocation();
        setCounter(counter + 1);
       // polylinecoordinates.push(counter + 1)
        //console.log(polylinecoordinates)
      }, 5000);
      return () => {
        id;
      };
    },
    [counter],
  );

  
  const getLocation = async ()=>{
    const {status} = await Permissions.askAsync(Permissions.LOCATION);

     if(status !== 'granted'){
         console.log('permission not granted')
     }else {
     const userLocation = await Location.getCurrentPositionAsync({});
    if(userLocation.coords.latitude !== null && userLocation.coords.longitude !== null){
      setPolylinecoordinates([...polylinecoordinates, {
          latitude: userLocation.coords.latitude,
          longitude: userLocation.coords.longitude
         }
      ])
      if(!firstPosition){
         setRegion({
           latitude:userLocation.coords.latitude,
           longitude:userLocation.coords.longitude,
           latitudeDelta:0.01,
           longitudeDelta:0.01});
         setFirstPosition(true);
      }
     

      setRegion({
        latitude:polylinecoordinates[0].latitude,
        longitude: polylinecoordinates[0].longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      })
    }
     console.log(polylinecoordinates);
  }

}


    // const sendlocation =(x, y) =>{
    //   async () => {
    //     // Make a request for a user with a given ID
    //     Callapi.post('auth/login', {
    //         lat: x,
    //         long: y,
    //     })
    //     .then(function (response) {
    //       console.log('succses sending data')
    //     })
    //     .catch(function (error) {
    //        console.log('fail to send data error '+ error)
    //       });
    //     }
    // }

    

  const returnPolymap =()=>{
      return(
             < MapView
                    style={{width: Dimensions.get('window').width,
                    height: Dimensions.get('window').height}}  
                    onRegionChange = {region=>region}
                   // initialRegion={region}
                    showsUserLocation={true}
                    showsMyLocationButton={true}
                    showsPointsOfInterest={true}
             >
              <Marker
                  title={"TIME"}
                  description={"Current Time : 2020-02-08 18:31:19"}   
                  coordinate={{
                    longitude: 35.204298,
                    latitude: 31.905022
                  }}
                    ><Image
                                source={require('../../assets/covid1.png')}
                                style={{width: 35, height: 35}}
                                resizeMode="contain"
                    />
              </Marker>
              <Marker
                  title={"TIME"}
                  description={"Current Time : 2020-02-08 18:31:19"}   
                  coordinate={{
                    longitude: 35.204322,
                    latitude: 31.906000
                  }}
                    ><Image
                                source={require('../../assets/covid1.png')}
                                style={{width: 35, height: 35}}
                                resizeMode="contain"
                    />
              </Marker>
              <Marker
                  title={"TIME"}
                  description={"Current Time : 2020-02-08 18:31:19"}   
                  coordinate={{
                    longitude: 35.214322,
                    latitude: 31.406000
                  }}
                    ><Image
                                source={require('../../assets/covid1.png')}
                                style={{width: 35, height: 35}}
                                resizeMode="contain"
                    />
              </Marker>
              <Marker
                  title={"TIME"}
                  description={"Current Time : 2020-02-08 18:31:19"}   
                  coordinate={{
                    longitude: 35.254322,
                    latitude: 31.456000
                  }}
                    ><Image
                                source={require('../../assets/covid1.png')}
                                style={{width: 35, height: 35}}
                                resizeMode="contain"
                    />
              </Marker>
              <Marker
                  title={"TIME"}
                  description={"Current Time : 2020-02-08 18:31:19"}   
                  coordinate={{
                    longitude: 35.254322,
                    latitude: 31.406000
                  }}
                    ><Image
                                source={require('../../assets/covid1.png')}
                                style={{width: 35, height: 35}}
                                resizeMode="contain"
                    />
              </Marker>
              <Marker
                  title={"TIME"}
                  description={"Current Time : 2020-02-08 18:31:19"}   
                  coordinate={{
                    longitude: 35.254322,
                    latitude: 31.496000
                  }}
                    ><Image
                                source={require('../../assets/covid1.png')}
                                style={{width: 35, height: 35}}
                                resizeMode="contain"
                    />
              </Marker>
              <Marker
                  title={"TIME"}
                  description={"Current Time : 2020-02-08 18:31:19"}   
                  coordinate={{
                    longitude: 35.254322,
                    latitude: 31.476000
                  }}
                    ><Image
                                source={require('../../assets/covid1.png')}
                                style={{width: 35, height: 35}}
                                resizeMode="contain"
                    />
              </Marker>
              <Marker
                  title={"TIME"}
                  description={"Current Time : 2020-02-08 18:31:19"}   
                  coordinate={{
                    longitude: 35.257322,
                    latitude: 31.407000
                  }}
                    ><Image 
                                source={require('../../assets/covid1.png')}
                                style={{width: 35, height: 35}}
                                resizeMode="contain"
                    />
              </Marker>
             </MapView>
            )
   }
  
  return ( 
    
    <View>
        <View style={{flex: 1}}>
           {returnPolymap()}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute', top: 0, left: 0, 
    backgroundColor: '#00000027', height: 60, width: '100%',
    zIndex: 100,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  headerCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headerButton: {
    width: 100,
    borderWidth: 1, 
    borderColor: '#ffffff57',
    backgroundColor: '#00000017',
    borderRadius: 10,
    flexDirection: 'row', 
    justifyContent: 'center',
    marginHorizontal: 2
  },
  headerButtonSelected: {
    backgroundColor: '#383c416b',
    borderColor: '#383c416b',
  },
  headerButtonName:{
    textAlign: "center",
    marginHorizontal: 2
  },
  headerButtonNameContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  }
});

export default Map;
