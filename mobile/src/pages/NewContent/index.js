import React,{useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, AsyncStorage} from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import {useNavigation} from '@react-navigation/native';

import api from '../../services/api';
import styles from './styles'
import Header from '../components/header';


const NewContent= ()=>{
    //Button return
    const navigation= useNavigation(); 

    const [image,setImage]=useState(null);
    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('');

    const Preview= async()=>{
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
        const user_id= await AsyncStorage.getItem('id');
       
        const localUri = image.uri;
        const filename = localUri.split('/').pop();
        const match = /\.(\w+)$/.exec(filename);
        const type = match ? `image/${match[1]}` : `image`;
      
        const formData = new FormData();
        formData.append('file', { uri: localUri, name: filename, type });//Ver se pode passar array com outros campos do body
        formData.append('title', title);
        formData.append('description', description);
        
        try{
            await api.post('contents', formData, {
                headers:{
                    authorization: user_id
                }
            })
            navigation.navigate('Profile');

        }
        catch{
            alert('Erro ao criar conteúdo')
        }
    }

    return(
        <>
        <Header title="Novo Conteúdo"/>
    
        <View style={styles.container}>
            <TouchableOpacity onPress={Preview} style={!image && styles.preview}>
                {image 
                ? 
                <Image style={styles.image} source={{uri: image.uri}}/>
                : 
                <Text>Select the image</Text>
                }
            </TouchableOpacity>

            <TextInput onChangeText={Title=> setTitle(Title)} style={styles.input} placeholder="Titulo"/>
            <TextInput onChangeText={Description=> setDescription(Description)} multiline style={styles.input} placeholder="Descricao"/>

            <TouchableOpacity onPress={Register} style={styles.button}>
                <Text style={styles.buttonText}>Criar Conteúdo</Text>
            </TouchableOpacity>
        </View>

        </>
    )
}

export default NewContent;