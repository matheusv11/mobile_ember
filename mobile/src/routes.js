import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Tab from './tab.routes'
import Register from './pages/Register';

const Stack= createStackNavigator();


const Routes= ()=>{
    return(
        <Stack.Navigator initialRouteName="Register" screenOptions={{
            headerShown: false
        }}>

            <Stack.Screen name="Home" component={Tab}/>
            <Stack.Screen name="Register" component={Register} />

        </Stack.Navigator>
    )
}
export default Routes;

