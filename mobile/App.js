import React,{useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { AppLoading } from 'expo';
import Routes from './src/routes';
import * as Font from 'expo-font'
//import {Ionicons, MaterialIcons } from '@expo/vector-icons/'

const getFonts=()=>{
  return Font.loadAsync({
    'segoe-script': require('./src/assets/fonts/segoe-script.ttf'),
    // ...Ionicons.font,
    // ...MaterialIcons.font
  })
}

export default function App() {

  const [fontsLoaded, setLoaded]= useState(false);

  if(fontsLoaded){
        
  return (
    // backgroundColor: '#f2f2f2', Alterar o statusBar
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <Routes/>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
    
  );
  }

  else{
    return <AppLoading startAsync={getFonts} onFinish={()=> setLoaded(true)}/>

  }

}

