import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Orgs({route}) {
    const params = route.params;
    const [orgs,setOrgs] = useState([])
    useEffect(() => {
        if(params.OrgsUrl== null || params.OrgsUrl== undefined)return
        fetch(params.OrgsUrl).then(response=>response.json()).then(data=>setOrgs(data))
    },[])
    return (

        <View style={[styles.container,]}>
            <Text>{params.OrgsUrl}</Text>
            {orgs.map(org=>(
                <Text key = {org.id} style={[styles.text,]}>{org.login} </Text>
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