import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Bio({route}) {
    const params=route.params
    return (

        <View style={[styles.container,]}>
            <View style={[styles.infoContainer,]}>
            <Text style={[styles.text,]}>{params.bio}</Text>   

            </View>  
        
        </View>    
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignContent: "center",
        alignItems: "center",
        backgroundColor: "#f7f8fc",

    },
    text: {
        fontFamily: "monospace",
        fontSize: 18,
    },
    infoContainer: {
        width: '100%',
        height: "100%",
        margin: 20,
        marginHorizontal: 10,
        padding: 30,
        borderRadius: 25,
        alignContent: "center",
        alignItems: "center",
        backgroundColor:"white",
    },

})