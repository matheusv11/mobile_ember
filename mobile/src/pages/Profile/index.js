import React from 'react';
import {Text,View} from 'react-native';

import Header from '../components/header';
import styles from './styles'


const Profile= ()=>{
    return(
      <View style={styles.container}>
        <Header/>

        <View style={styles.body}>
          <Text>Perfil!</Text>
        </View>

      </View>
    )
}

export default Profile;