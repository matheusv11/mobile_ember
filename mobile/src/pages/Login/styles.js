import {StyleSheet } from 'react-native'


export default StyleSheet.create({

    container:{ 
        flex: 1,
        backgroundColor: '#f0044c',

    },

    body:{
        // backgroundColor: 'black',
        // borderRadius: 8,
        marginTop:"50%",
        paddingHorizontal:  32,
        alignItems: "center" ,
        marginBottom: "52%",//Reduzir oq esta abaixo


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
        backgroundColor: '#2c72e6',
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


    bottom:{
        // paddingTop: 19,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: 'white',
        width: '100%'
    },






})