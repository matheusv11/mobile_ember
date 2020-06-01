import React from 'react';
import { View, Text, Button} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import styles from './styles'

const Register= ()=>{
    const navigation= useNavigation();

    const gohome= ()=>{
        navigation.navigate('Home', {screen: 'Home'})
    }

    return(

        <View style={styles.container} >
            <View style={styles.header}>
                <Text>Ember</Text>
            </View>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Registro!</Text>
                <Button title="Oi" onPress={gohome}>
                
                </Button>
            </View>

        </View>
    )
}

export default Register;