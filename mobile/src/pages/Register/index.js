import React, { useState, } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, KeyboardAvoidingView} from 'react-native'
import { useNavigation, Link } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';//Retorna todos metodos, funcoes pro ImagePicker

import api from '../../services/api'
import styles from './styles'

const Register= ()=>{

//Constantes
    const navigation= useNavigation();
    
    const [image,setImage]= useState(null);
    const [dados,setDados]= useState({
        name: '',
        email: '',
        password: ''
    })

//Funcoes

    const Preview= async ()=>{
        const permission = await ImagePicker.requestCameraRollPermissionsAsync();
        if (permission.granted === false) {
          alert('Permission to access camera roll is required!');
          return;
        }
        
        const result = await ImagePicker.launchImageLibraryAsync();
        if (result.cancelled === true) {
          return;
        }

        setImage(result);
       
      }

      
    const Register= async()=>{
        //Tentar otimizar e trazer nome original
        //Fazer edicao de imagem pra encaixa-la no avatar
        //Verificar novamente os dados do formData enviados pro back no lemon
        //const data= {name,email,password}
        const localUri = image.uri;
        const filename = localUri.split('/').pop();
        const match = /\.(\w+)$/.exec(filename);
        const type = match ? `image/${match[1]}` : `image`;
      
        const formData = new FormData();
        formData.append('file', { uri: localUri, name: filename, type });//Ver se pode passar array com outros campos do body
        formData.append('name', dados.name)
        formData.append('email', dados.email)
        formData.append('password', dados.password)
        
  
        //IF IMAGEM NULL

        try{
            await api.post('/users', formData,{
                headers:{'Content-Type': 'multipart/form-data'}
            })
            navigation.navigate("Login")
        }
        catch{
            alert('Usuario ja cadastrado')
        }

    }
    
//Retorno
    return(

        <View style={styles.container} >
            <KeyboardAvoidingView behavior="position" >
            <View style={styles.body}>
                
                <Text style={styles.containerText}>Ember</Text>
                
                <TouchableOpacity onPress={Preview} style={styles.preview}>

                {image ? <Image source={{uri: image.uri}} style={styles.avatar}/>:
                    <Text>Select the image</Text>
                }
                </TouchableOpacity>
             
                <TextInput style={styles.input} placeholder="Nome" keyboardType="default" onChangeText={name=> setDados({...dados, name: name})}/>
                <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" onChangeText={email=> setDados({...dados, email: email})}/>
                <TextInput style={styles.input} placeholder="Senha" keyboardType="visible-password" onChangeText={password=> setDados({...dados, password})}/>

                
                <TouchableOpacity style={styles.button} onPress={Register}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>

            </KeyboardAvoidingView>

            <View style={styles.bottom}>
                <Text>Possui cadastro? </Text>
                <Link to="/Login" >
                    <Text style={{color: 'blue'}}>Faça Login</Text>
                </Link>
     

            </View>

        </View>
        
    )
}

export default Register;