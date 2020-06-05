import React, {useState} from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
//import { useRoute } from '@react-navigation/native';

import Header from '../components/header';

import styles from './styles'


const Home= ()=>{
    
  // const route= useRoute();

    return(
      
    <View style={styles.container}>

      <Header title="Home"/>
      
      <View style={styles.body}>
        <Text>Oi!</Text>
      </View>

    </View>
    )
}

export default Home;