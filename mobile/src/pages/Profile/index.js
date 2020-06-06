import React, { useEffect, useState } from 'react';
import {Text,View, Image, AsyncStorage, FlatList, TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
//import {useRoute} from '@react-navigation/native'

import api from '../../services/api'
import Header from '../components/header';
import styles from './styles'


const Profile= ()=>{

    const [user_data,setUser_data]= useState('')
    const [content_data, setContent]= useState([])

    useEffect(()=>{
      async function data(){
        const user_id= await AsyncStorage.getItem('id')
          
        const response= await api.get('profile', {
            headers:{
              authorization: user_id
            }
          });

          setUser_data(response.data.user_data)
          setContent(response.data.content_data)
      }
      data();

    },[])


    return(
      <>
      <View style={styles.container}>
        <Header title="Perfil" />
        <Ionicons name="ios-add-circle-outline" style={styles.circular_button} size={32}/>
        <View style={styles.user_data}>
          <Image source={{uri: user_data.avatar}} style={styles.avatar}/>

          <View style={styles.user_data_text}>
            <Text style={styles.user_data_text_name}>{user_data.name}</Text>
            <Text style={styles.user_data_text_email}>{user_data.email}</Text>

          </View>
 

        </View> 


          <FlatList
          data={content_data}
          keyExtractor={items=> String(items.id)}
          style={styles.content_data}
          renderItem={({item: items})=>(
            <View style={styles.content_data_item}>
              <Text style={styles.content_data_title}>{items.title}</Text>
              <Image style={styles.content_data_image} source={{uri: user_data.avatar}}/>
              <Text style={styles.content_data_description}>{items.description}</Text>
              
              <TouchableOpacity style={styles.content_data_delete}>
                <Text>Deletar</Text>
              </TouchableOpacity>
    
          </View>  
          
          )}
          >

          </FlatList>
        
  


      </View>
      </>
    )
}

export default Profile;