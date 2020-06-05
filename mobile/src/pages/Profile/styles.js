import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container:{ 
        flex: 1,
        backgroundColor: '#f2f2f2'
    },

    user_data:{
        flexDirection:"row",
        alignItems: 'center',
        justifyContent: "flex-start",
        backgroundColor: 'white',
        height: 140,
        marginHorizontal: 20,
        borderRadius: 10,
    },

    avatar:{
        marginTop: 6,
        marginHorizontal: 6,
        width: 96,
        height: 96,
        borderRadius: 100
    },
    user_data_text:{
        flexDirection: "column",
        
     },

    user_data_text_name:{
        // paddingTop: 0,
        paddingLeft: 24,
        fontSize: 24,
        
    },

    user_data_text_email:{
        paddingTop: 12,
        paddingLeft: 24,
        fontSize: 12,
    },

    content_data:{
        flex: 1,
        marginTop: 20,
        paddingHorizontal: 20,
        alignItems: "center",//Colocar itens no meio o justify coloca no meio da tela
        //flexDirection: "column"
        //justifyContent: 'flex-end'//Joga la pra baixo
    },

    content_data_text:{
        fontSize: 24,
        
    },


    content_data_item:{
        marginTop: 24,
        //padding: 40,
        alignItems: "center",
        width: '100%',
        //height: '35%',
        borderRadius: 30,
        backgroundColor: '#FFF',
        paddingTop: 16,
        paddingBottom: 16,
    },

    content_data_title:{
        fontSize: 18,
        
    },

    content_data_image:{
        marginTop: 6,
        width: 180,
        height: 110,
        
    },

    content_data_description:{

    }



});