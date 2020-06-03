import React from 'react';
import { View, Text, Button, TouchableOpacity, TextInput} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import styles from './styles'

const Login= ()=>{
    const navigation= useNavigation();

    const goHome= ()=>{
        navigation.navigate('Home', {screen: 'Home'})
    }//aok

    const goRegister= ()=> {
        navigation.navigate('Register');
    }

    return(

        <View style={styles.container} >
            <View style={styles.body}>
                <Text style={styles.containerText}>Ember</Text>

                <TextInput style={styles.input} placeholder="Email"/>
                <TextInput style={styles.input} placeholder="Senha"/>
                
                <TouchableOpacity style={styles.button} onPress={goHome}>
                    <Text style={styles.buttonText}>Logar</Text>
                </TouchableOpacity>
            </View>

            
            <View style={styles.bottom}>
                <Text>Não é cadastro? </Text>
                <TouchableOpacity onPress={goRegister}>
                    <Text style={{color: 'blue'}}>Registre-se</Text>
                </TouchableOpacity>
            </View>

        </View>
        
    )
}

export default Login;