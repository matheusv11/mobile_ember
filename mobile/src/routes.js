import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {AsyncStorage} from 'react-native'

import Tab from './tab.routes';
import Login from './pages/Login';
import Register from './pages/Register';
import NewContent from './pages/NewContent';

const Stack= createStackNavigator();

const Routes= ()=>{

    return(
        <Stack.Navigator initialRouteName="Login" headerMode="none">
            
            <Stack.Screen name="Home" component={Tab}/>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Register" component={Register}/>
            <Stack.Screen name="NewContent" component={NewContent}/>
            
        </Stack.Navigator>
    )
}
export default Routes;

