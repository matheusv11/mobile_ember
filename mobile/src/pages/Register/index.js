import React from 'react';
import { View, Text, Button, TouchableOpacity, TextInput} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import styles from './styles'

const Register= ()=>{
    const navigation= useNavigation();

    const gohome= ()=>{
        navigation.navigate('Home', {screen: 'Home'})
    }//aok

    return(

        <View style={styles.container} >

            <Text style={styles.containerText}>Ember</Text>

            <TextInput style={styles.input} placeholder="Email"/>
            <TextInput style={styles.input} placeholder="Senha"/>
              
            <TouchableOpacity style={styles.button} onPress={gohome}>
                <Text style={styles.buttonText}>Logar</Text>
            </TouchableOpacity>
            

        </View>
        
    )
}

export default Register;