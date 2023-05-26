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
            {followers.map(follower=>(
                <Text key = {follower.id} style={[styles.text,]}>{follower.login} </Text>
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