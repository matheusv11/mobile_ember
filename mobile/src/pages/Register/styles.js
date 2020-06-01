import {StyleSheet } from 'react-native'


export default StyleSheet.create({
    container:{ 
        flex: 1,
        //paddingBottom: 20,
        backgroundColor: '#f0044c',
        justifyContent: 'center', 
        alignItems: 'center' 

    },

    containerText:{
        fontFamily: 'segoe-script',
        fontSize: 38,
        color: 'white'
    },
    
    button:{
        backgroundColor: '#094fe6',
        borderRadius: 8,
        height: 46,
        width: 120,
        justifyContent: "center",
        alignItems:"center"
    },
    buttonText:{
        fontSize: 24
    }


})