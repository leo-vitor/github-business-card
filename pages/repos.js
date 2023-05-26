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
            {repos.map(repo=>(
                <Text key = {repo.id} style={[styles.text,]}>{repo.name} </Text>
            ))}
               
        
        </View>    
    )
}

const styles = StyleSheet.create({

    container: {
        paddingHorizontal: 10,
        gap:10,
    },
    text: {
        fontSize: 20,
    },

})