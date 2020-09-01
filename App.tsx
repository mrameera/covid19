import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/auth/Login'
import AppRoutre from './src/AppRouter';
import Register from "./src/auth/Register";
import Dashboard from './src/dashbord/Dashbord';
import Map from './src/map/Map';
export default function App() {
  return (
   // <View  style ={styles.container}>
      <Map />
   //  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
