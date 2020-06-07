import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {Ionicons} from '@expo/vector-icons/';

import Home from './pages/Home';
import Profile from './pages/Profile';


const Tab = createMaterialTopTabNavigator();

const Tab_route=()=>{
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: 'orange',//Muda o selecionado atual logo se for texto ou icone que herdar ele mostra
            inactiveTintColor: 'grey',
            //Se redimensiona conforme tamanho dos componentes
            style: {
                backgroundColor: '#f2f2f2'
            },
            indicatorStyle: {
                height: 0
            },
            showIcon: true,
            showLabel: false,
           

        }} 
        lazy='true'
        initialRouteName="Home" 
        tabBarPosition='bottom'
        >
            <Tab.Screen options={{
                tabBarIcon: ({color: tintColor})=>(//Herdado do tabBarOptions
                    <Ionicons name="ios-home" size={24} color={tintColor} />
                )
            }}
             name="Home" 
             component={Home} />

            <Tab.Screen options={{
                tabBarIcon: ({color: tintColor})=>(
                    <Ionicons name="ios-person" size={24} color={tintColor} />
                )
            }} 
            name="Profile" 
            component={Profile} />

        </Tab.Navigator>


  
    );
}

export default Tab_route;