import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; 
import colors from '../config/colors/colors';

//Screens
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SearchScreen from '../screens/SearchPage';

//Screen Names
const homeName = "Home";
const searchName = "Search";
const versusName = "Versus";
const profileName = "Profile";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
      <Tab.Navigator
      initialRouteName={homeName}
      activeColor = 'red'
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: colors.text,
        tabBarStyle: {
            paddingTop: 10
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let rn = route.name;

          if(rn === homeName){
            iconName = focused ? 'home' : 'home-outline';
          }else if(rn === searchName){
            iconName = focused ? 'search' : 'search-outline';
          }else if(rn === versusName){
            iconName = focused ? 'copy' : 'copy-outline';
          }else if(rn === profileName){
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name = {iconName} size = {27} color = {color}/>

        },
      })}

      
      >

        <Tab.Screen name={homeName} component={HomeScreen}/>
        <Tab.Screen name={searchName} component={SearchScreen}/>
        <Tab.Screen name={versusName} component={VersusScreen}/>
        <Tab.Screen name={profileName} component={SearchScreen}/>

      </Tab.Navigator>



  );
}




