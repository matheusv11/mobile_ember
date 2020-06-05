import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, TextInput} from 'react-native'
import { useNavigation, Link } from '@react-navigation/native';
import styles from './styles'
import api from '../../services/api'


const Login= ()=>{
//Constantes
    const navigation= useNavigation();
    const [dados,setDados]=useState({
        email: '',
        password: ''
    })

//Funcoes
    const Logar= async()=>{
        try{
            await api.post('auth', dados).then(response=>{
                const {name,email,avatar}= response.data
                
                navigation.navigate('Home', {screen: 'Home', params:{
                    name,
                    email,
                    avatar,
                }})
                console.log(avatar)
                
            })
            
        }
        catch{
            alert("Dados invalidos")
        }
    }
    


    return(

        <View style={styles.container} >
            <View style={styles.body}>
                <Text style={styles.containerText}>Ember</Text>

                <TextInput style={styles.input} onChangeText={email=> setDados({...dados, email: email})} placeholder="Email"/>
                <TextInput style={styles.input} onChangeText={password=> setDados({...dados, password: password})} placeholder="Senha"/>
                
                <TouchableOpacity style={styles.button} onPress={Logar}>
                    <Text style={styles.buttonText}>Logar</Text>
                </TouchableOpacity>

            </View>

            
            <View style={styles.bottom}>
                <Text>Não é cadastro? </Text>
                <Link to="/Register">
                    <Text style={{color: 'blue'}}>Registre-se</Text>
                </Link>
            </View>

        </View>
        
    )
}

export default Login;