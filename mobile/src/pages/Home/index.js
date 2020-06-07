import React, {useState} from 'react';
import { StyleSheet, Text, View, AsyncStorage, TouchableOpacity } from 'react-native';
//import { useRoute } from '@react-navigation/native';

import Header from '../components/header';

import styles from './styles'


const Home= ()=>{
    
  // const route= useRoute();

    return(
      
    <View style={styles.container}>

      <Header title="Home"/>
      
      <View style={styles.body}>
        <TouchableOpacity onPress={()=> AsyncStorage.clear()}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>

    </View>
    )
}

export default Home;