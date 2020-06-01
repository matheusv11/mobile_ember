import {StyleSheet } from 'react-native'


export default StyleSheet.create({
    container:{ 
        flex: 1,

    },

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

    body:{
       flex: 1,
       justifyContent: 'center', 
       alignItems: 'center'
    }
})