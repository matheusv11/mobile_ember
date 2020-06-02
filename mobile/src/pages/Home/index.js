import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from '../components/header';

import styles from './styles'


const Home= ()=>{


    return(
      
    <View style={styles.container}>

      <Header/>
      
      <View style={styles.body}>
        <Text>Home!</Text>
      </View>

    </View>
    )
}

export default Home;