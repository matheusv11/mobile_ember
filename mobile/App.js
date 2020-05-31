import React from 'react';
import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1, backgroundColor: '#f2f2f2'}}>
        <NavigationContainer>
          <Routes/>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
    
  );
}

