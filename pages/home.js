import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet,Image,TextInput,Modal } from 'react-native';
import { Ionicons, AntDesign,SimpleLineIcons,MaterialCommunityIcons,FontAwesome   } from '@expo/vector-icons';

 
function Buttom({icon,title,description,onPress}) {
  return (

  <View style = {styles.buttom} onTouchStart= {onPress} > 
    <View style = {styles.iconContainer}>{icon}</View>
        <View style = {styles.leftContent}>
            <Text style = {{fontWeight: 'bold', lineHeight:25 }}>{title}</Text>  
            <Text style = {{padding:2, color: 'grey'}}>{description} </Text>
        </View>
    
    <View style = {{justifyContent:'center'}}>
    <AntDesign name="right" size={24} color="black" />
    </View>
    
        
  </View>
    
  )
}
export default function Home({navigation}) {

    const [githubData, setGithubData] = useState();
    const [user, setUser] = useState('leo-vitor')
    const [displayUserValue, setDisplayUserValue] = useState()
    const [modalVisible,setModalVisible] = useState(false)
    function HandleSubmit(){
        setUser(displayUserValue)
        setModalVisible(false)
        setDisplayUserValue('')
    }
    function HandleModalClick(event){
        event.stopPropagation()
    }
    useEffect(() => {
        fetch(`https://api.github.com/users/${user}`).then(response =>response.json() ).then(data => setGithubData(data)) 
    },[user])
  return (
    <View style={styles.container}>
      <View style = {styles.photoContainer}>
        <Image style= {styles.image} source={{uri:githubData?.avatar_url}}/>
        <View  onTouchStart={() => setModalVisible(true)} style= { styles.searchButtom}><FontAwesome name="search" size={24} color="white" /></View>
      </View>
      <View style = {{alignItems:"center"}}> 
        <Text style = {{fontWeight:'bold', fontSize: 21}}>{githubData?.name}</Text>
        <Text style = {{ fontSize: 15}}>
            {githubData?.login && `@${githubData?.login}`}
        </Text>
      </View>
      <View style= { styles.buttomContainer}>
        <Buttom icon ={<Ionicons name="person-outline" size={24} color="black" />} title = {'Bio'} description={'Um pouco sobre o usuário'} onPress = {() => navigation.navigate("Bio",{bio:githubData?.bio})}/>
        <Buttom icon ={<SimpleLineIcons name="earphones-alt" size={24} color="black" />} title = {'Orgs'} description={'Organizações que o usuário faz parte'} onPress = {() => navigation.navigate("Orgs", {OrgsUrl:githubData?.organizations_url})}/>
        <Buttom icon ={<AntDesign name="profile" size={24} color="black" />} title = {'Repositórios'} description={'Lista contendo todos os repositórios'} onPress={() => navigation.navigate("Repos",{ReposUrl:githubData?.repos_url})}/>
        <Buttom icon ={<MaterialCommunityIcons name="face-recognition" size={24} color="black" />} title = {'Seguidores'} description={'Lista de seguidores'} onPress={() => navigation.navigate("Followers",{followersUrl:githubData?.followers_url})}/>
      </View>  
      <View style = {styles.resetContainer}>
      <View onTouchStart={() => setGithubData(null)} style = {styles.resetButtom}>
        <Text style = {{  textAlignVertical: "center"}}><Ionicons name="exit-outline" size={24} color="black" /></Text>
        <Text style = {{ lineHeight: 68, fontSize: 20 }}> Resetar</Text>
        </View>
      </View>
      <Modal
      visible={modalVisible}
      onRequestClose = {() =>{
        setModalVisible(false);
      }}
      transparent = {true}
      animationType='slide'

      > 
      <View onTouchStart={()=>setModalVisible(false)} style = {{
       flex: 1,
        backgroundColor: '#33333355',
        justifyContent: "center",
        alignItems: "center",
      }}>
        <View onTouchStart={HandleModalClick}  style = {{
            backgroundColor: "white",
            borderRadius: 25,
            width: 250,
            height: 100,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            paddingHorizontal: 20,
            gap: 10,
        }}>
            <Text>Digite o @ do usuário</Text>
            <TextInput style = {{
                borderWidth: 1,	
                width: '80%',
                borderRadius: 25,
                paddingHorizontal: 25,

            }}
                value = {displayUserValue}
                onChangeText={setDisplayUserValue}
                onSubmitEditing={HandleSubmit}
                
            />
        </View>
      </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#f7f8fc",
   	
  },
  image: {
    width: 170,
    height: 170,
    borderRadius: 45,

  },
  text: {
    fontSize: 24,
    justifyContentHorizontal: "center",
    textAlignVertical: "center",


    margin: 5,
  },

  buttom: {
    fontSize: 24,
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
    margin:2,
    width: 350,
    height: 80,
    justifyContent: "space-between",

    
  },
  buttomText:{
      textAlignVertical: "center",
      fontWeight: 'bold',

  },
  buttomContainer: {
    flexDirection: "column",
    margin: 10,
    borderRadius: 25,
    overflow: "hidden",
  },
  leftContent:{
    flex:1,
    justifyContent: "flex-start",
    flexDirection:"column",
    marginStart: 0,
  },
  buttomDescription:{

  },
  
resetContainer:{
  
  justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width:'100%',
    height: 120,
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
   
    
    

},
  resetButtom : {
    fontSize: 24,
    //margin: 50,
    flexDirection: "row",
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 20,
    width: 320,
    height: 70,
    alignContent: "center",
    justifyContent: "center",

    
  },

  photoContainer: {
    height: 170,
    width: 170,
    backgroundColor: "grey",
    margin: 10,
    marginTop: 0,
    borderRadius: 45,
    top: 0,
    
    
   

  },

  searchButtom : {
    height: 60,
    width: 60,
    backgroundColor: "black",
    margin: 3,
    borderRadius: 15,
    right: -125,
    top: -50,
    justifyContent: 'center',
    alignItems: 'center'
  },

  iconContainer: {
    alignContent: "center",
    justifyContent: 'center',
    justifyContent:'space-between',
    margin:15,
    
    padding: 2,
    borderWidth:1,
    borderColor: "grey",
    borderRadius: 5,
    
  },
  
});