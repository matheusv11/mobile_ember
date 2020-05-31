import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Home from './pages/Home';
import Profile from './pages/Profile';

//import { Text, View } from 'react-native';

const Tab = createMaterialTopTabNavigator();

const Routes= ()=>{
    return(
        <SafeAreaProvider>
            <SafeAreaView style={{flex: 1}}>
                <NavigationContainer>

                    <Tab.Navigator tabBarPosition='bottom'>
                        <Tab.Screen name="Home" component={Home} />
                        <Tab.Screen name="Profile" component={Profile} />
                    </Tab.Navigator>

                </NavigationContainer>
            </SafeAreaView>
      </SafeAreaProvider>
    )
}
export default Routes;


