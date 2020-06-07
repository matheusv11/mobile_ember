import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    
    container:{
        flex: 1,
        paddingHorizontal: 20,
        // justifyContent: 'center',
       // flexDirection: 'column'
    },


    preview:{
        padding: "30%",
        alignItems: 'center',        
        marginTop: 20,
        backgroundColor: 'green'
    },

    image:{
        //width: "100%",
        //heigth: 280,
        //Definir limites de imagem
        //Poderia definir div so pra esse conteudos ou so pra imagem
        //Definir tamanho baseado na imagem
        //maxHeight: 120,
        marginTop: 20,
        padding: "30%",
        resizeMode: "stretch",
        // marginTop: 20,
    },

    input:{
        marginTop: 20,
        padding: 20,
       // width: "100%",
        backgroundColor: 'white',
        borderRadius: 10
    },
    
    button:{
        marginTop: 20,
        padding: 20,
        backgroundColor: '#2c72e6',
        alignItems: "center",
        borderRadius: 10,

    },

    buttonText:{
        color: 'white'
    },

});