import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/auth/Login'
import AppRoutre from './src/AppRouter';
import Register from "./src/auth/Register";
import Dashboard from './src/dashbord/Dashbord';
import Map from './src/map/Map';
import Prevention from "./src/prevention/Prevention";
import Food from "./src/food/Food";
import EmergencyNumbers from "./src/emargencyCalls/EmergencyNumbers";
export default function App() {
  return (
   // <View  style ={styles.container}>
      <EmergencyNumbers />
   //  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
