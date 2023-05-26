import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Followers({route}) {
    const params = route.params;
    const [followers,setFollowers] = useState([])
    useEffect(() => {
        if(params.followersUrl== null || params.followersUrl== undefined)return
        fetch(params.followersUrl).then(response=>response.json()).then(data=>setFollowers(data))
    },[])
    return (

        <View style={[styles.container,]}>
            <View style={styles.infoContainer}>
            {followers.map(follower=>(
                <Text key = {follower.id} style={[styles.text,]}>{follower.login} </Text>
            ))}
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
        fontSize: 20,
        fontFamily: "monospace",
    },
    infoContainer: {
        width:'100%',
        height:"100%",
        margin: 20,
        marginHorizontal: 50,
        padding: 10,
        borderRadius: 25,
        alignContent: "center",
        alignItems: "center",
        backgroundColor:"white",
    },

})