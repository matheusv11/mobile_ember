import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import styles from './styles'


const Home= ()=>{


    return(
      
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Text>Home!</Text>
      </View>

      <View style={styles.body}>
        <Text>Home!</Text>
      </View>

    </View>
    )
}

export default Home;