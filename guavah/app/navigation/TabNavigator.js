import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'; 
import colors from '../config/colors/colors';

//Screens
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LoginScreen from '../screens/LoginScreen';
import SearchScreen from '../screens/SearchPage';
import VersusScreen from '../screens/VersusScreen/VersusScreen';

//Screen Names
const homeName = " ";
const searchName = "   ";
const versusName = "     ";
const profileName = "  ";

const Tab = createBottomTabNavigator();

export default function TabNavigator({latitude, longitude}) {

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
            iconName = focused ? 'home' : 'home';
          }else if(rn === searchName){
            iconName = focused ? 'search' : 'search';
          }else if(rn === versusName){
            iconName = focused ? 'trophy' : 'trophy';
          }else if(rn === profileName){
            iconName = focused ? 'person' : 'person';
          }

          return <Ionicons name = {iconName} size = {27} color = {color}/>
          // return <MaterialIcons name = {iconName} size = {27} color = {color}/>

        },
      })}

      
      >

        {/* <Tab.Screen name={homeName} component={HomeScreen}/> */}
        <Tab.Screen name={homeName} component={() => <HomeScreen latitude={latitude} longitude={longitude}/>}/>
        {/* <Tab.Screen name={searchName} component={SearchScreen}/> */}
        <Tab.Screen name={searchName} component={() => <SearchScreen latitude={latitude} longitude={longitude}/>}/>
        <Tab.Screen name={versusName} component={VersusScreen}/>
        <Tab.Screen name={profileName} component={ProfileScreen}/>

      </Tab.Navigator>



  );
}




