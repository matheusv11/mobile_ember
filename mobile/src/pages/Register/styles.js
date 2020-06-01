import {StyleSheet } from 'react-native'


export default StyleSheet.create({
    container:{ 
        flex: 1,
        paddingHorizontal:  32,
        //paddingBottom: 20,
        backgroundColor: '#f0044c',
        justifyContent: "center", 
        alignItems: "center" ,
        //alignContent: "center"

    },
    

    containerText:{
        fontFamily: 'segoe-script',
        fontSize: 38,
        color: 'white',
        paddingBottom: 30
    },

    input:{
        borderRadius: 8,
       //borderColor: 'black',
        backgroundColor: '#f2f2f2',
        marginTop: 22,
        width: "100%",
        paddingLeft: 23,
        height: 48,

    },
    
    button:{
        marginTop: 20,
        backgroundColor: '#094fe6',
        borderRadius: 6,
        height: 46,
        width: "100%",
        justifyContent: "center",
        alignItems:"center",

    },

    buttonText:{
        fontSize: 16,
        color: "white"
    },





})