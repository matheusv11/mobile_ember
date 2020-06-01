import React from 'react';
import { View, Text, Button, TouchableOpacity, TextInput} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import styles from './styles'

const Register= ()=>{
    const navigation= useNavigation();

    const gohome= ()=>{
        navigation.navigate('Home', {screen: 'Home'})
    }

    return(

        <View style={styles.container} >
                
                <Text style={styles.containerText}>Ember</Text>
                <TextInput placeholder="email"/>
                    
              
                <TouchableOpacity style={styles.button} onPress={gohome}>
                    <Text style={styles.buttonText}>Registrar</Text>
                </TouchableOpacity>
          

        </View>
    )
}

export default Register;