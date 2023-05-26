import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Bio({route}) {
    const params=route.params
    return (

        <View style={[styles.container,]}>
            <Text style={[styles.text,]}>{params.bio}</Text>   
        
        </View>    
    )
}

const styles = StyleSheet.create({

    container: {

    },
    text: {
        color: "red",
    },

})