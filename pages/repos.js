import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Repos({route}) {
    const params = route.params;
    const [repos,setRepos] = useState([])
    useEffect(() => {
        if(params.ReposUrl== null || params.ReposUrl== undefined)return
        fetch(params.ReposUrl).then(response=>response.json()).then(data=>setRepos(data))
    },[])
    return (

        <View style={[styles.container,]}>
            <View style={styles.infoContainer}>

            {repos.map(repo=>(
                <Text key = {repo.id} style={[styles.text,]}>{repo.name} </Text>
            ))}
            </View>
               
        
        </View>    
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#f7f8fc",

    },
    text: {
        fontSize: 20,
        fontFamily: "monospace",
    },
    infoContainer: {
        width:'100%',
        height:"100%",
        margin: 20,
        marginHorizontal: 10,
        padding: 10,
        borderRadius: 25,
        backgroundColor:"white",
    },

})