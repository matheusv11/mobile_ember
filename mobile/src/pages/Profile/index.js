//Interno
import React, { useEffect, useState } from 'react';
import {Text,View, Image, AsyncStorage, FlatList, TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {Link, useIsFocused} from '@react-navigation/native'

//Externo
import api from '../../services/api'
import Header from '../components/header';
import styles from './styles'

const Profile= ()=>{    
    
    const focus= useIsFocused();//Pode usar o hooks useFocusEffect quase mesmo que useEffect pesquisar melhor
    //Verificar se quando ele retorna pra page mesmo carrega ele nao executa denovo o evento com useEffect 

    const [user_data,setUser_data]= useState('')
    const [content_data, setContent]= useState([])
    

    const deletar= async(id)=>{
      const user_id= await AsyncStorage.getItem('id'); 

      await api.delete(`contents?id=${id}`, {
        headers:{
          authorization: user_id
        }
      })

      setContent(content_data.filter(items=> items.id !== id));
    }


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

    },[focus])


    return(
      <>
      <View style={styles.container}>
        <Header title="Perfil" />

        <Link to="/NewContent" style={styles.circular_button}> 
          <Ionicons name="ios-add-circle-outline"  size={32}/>
        </Link>
        
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
              <Image style={styles.content_data_image} source={{uri: `http://192.168.1.4:3030/files/${items.image}`}}/>
              <Text style={styles.content_data_description}>{items.description}</Text>
              
              <TouchableOpacity onPress={()=> deletar(items.id)} style={styles.content_data_delete}>
                <Text style={styles.content_data_delete_text}>Deletar</Text>
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