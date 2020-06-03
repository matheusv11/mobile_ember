import React,{useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { AppLoading } from 'expo';
import Routes from './src/routes';
import {useFonts} from '@use-expo/font'




export default function App() {

  // const [fontsLoaded, setLoaded]= useState(false);

  let loadFont= useFonts({
    'segoe-script': require('./src/assets/fonts/segoe-script.ttf')
  });

  if(loadFont){
        
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
    return <AppLoading/>

  }

}

