import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./pages/home";
import BioScreen from "./pages/bio";
import Orgs from './pages/orgs';
import Repos from './pages/repos';
import Followers from './pages/followers';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options = {{headerShown:false}}name = "Home" component={HomeScreen}/>
        <Stack.Screen name = "Bio" component={BioScreen}/>
        <Stack.Screen name = "Orgs" component={Orgs}/>
        <Stack.Screen name = "Repos" component={Repos}/>
        <Stack.Screen name = "Followers" component={Followers}/>
      </Stack.Navigator>
   </NavigationContainer>

  )

};