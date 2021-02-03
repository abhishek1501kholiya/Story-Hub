import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import WriteStoryScreen from './screens/WriteStoryScreen'
import ReadStoryScreen from './screens/ReadStoryScreen'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'

export default function App() {
  return (
    <Appcontainer/>
  );
}
const Tab = createBottomTabNavigator({
   WriteStory:{screen:WriteStoryScreen},
   ReadStory:{screen:ReadStoryScreen}
},{
  defaultNavigationOptions:({navigation})=>({
   tabBarIcon:()=>{
     const routeName = navigation.state.routeName;
     if(routeName==='WriteStory'){
        return(
          <Image source={require('./PRO+C70+Images/write.png')} style={{width:40,height:40}}/>
        )
     }else if(routeName==='ReadStory'){
       return(
         <Image source={require('./PRO+C70+Images/read.png')} style={{width:40,height:40}}/>
       )

    }
   }
  })
}

)
const Appcontainer = createAppContainer(Tab)