import React from 'react';
import {StyleSheet, Text, View } from 'react-native'

const Header = ({title})=>{
    return(
        <View style={styles.header}>
            <Text style={styles.headerText}>{title}</Text>
            
        </View>
    )
}

const styles= StyleSheet.create({
    header:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        backgroundColor: '#f0044c'
        //So passar background color e tamanho
    },

    headerText: {
        fontFamily: 'segoe-script',
        fontSize: 24,
        color: 'white',
        
      },
});

export default Header;