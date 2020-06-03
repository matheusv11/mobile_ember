import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Image} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';//Retorna todos metodos, funcoes pro ImagePicker

import styles from './styles'

const Register= ()=>{

    const navigation= useNavigation();

    const goLogin= ()=>{
        navigation.navigate('Login');
    }

    const Register= ()=>{

    }

    return(

        <View style={styles.container} >
            <View style={styles.body}>
    
                <Text style={styles.containerText}>Ember</Text>

                <TextInput style={styles.input} placeholder="Nome"/>
                <TextInput style={styles.input} placeholder="Email"/>
                <TextInput style={styles.input} placeholder="Senha"/>

                
                <TouchableOpacity style={styles.button} onPress={goLogin}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>

            
            <View style={styles.bottom}>
                <Text>Possui cadastro? </Text>

                <TouchableOpacity onPress={goLogin}>
                    <Text style={{color: 'blue'}}>Faça Login</Text>
                </TouchableOpacity>

            </View>

        </View>
        
    )
}

export default Register;