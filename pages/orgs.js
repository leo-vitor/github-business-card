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
            <View style={styles.infoContainer}>

            {orgs.map(org=>(
                <Text key = {org.id} style={[styles.text,]}>{org.login} </Text>
            ))}
            </View>
               
        
        </View>    
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#f7f8fc",
        alignItems : 'flex-start',
        alignContent: 'flex-start',
    },
    text: {
        fontSize: 20,
        fontFamily: "monospace",
        textAlign: "flex-start",
    },
    infoContainer: {
        width:'100%',
        height:"100%",
        margin: 20,
        marginHorizontal: 50,
        padding: 10,
        borderRadius: 25,
        alignItems : 'flex-start',
        alignContent: 'flex-start',
        backgroundColor:"white",
    },

})