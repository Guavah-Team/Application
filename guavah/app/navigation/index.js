import React, {useEffect, useState} from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import {Auth, Hub} from 'aws-amplify';
import TabNavigator from './TabNavigator';


const Stack = createNativeStackNavigator();


const Navigation = () => {
    const [user, setUser] = useState(undefined);



    const checkUser = async() => {
        try{
            const authUser = await Auth.currentAuthenticatedUser({bypassCache: true});
            setUser(authUser);
        }catch(e){
            setUser(null);
        }
    }


    useEffect(() => {
        checkUser();
    }, []);

    useEffect(() => {
        const listener = (data) => {
            if(data.payload.event == 'signIn' || data.payload.event == 'signOut'){
                checkUser();
            }
        };

        Hub.listen('auth', listener)
        return () => Hub.remove('auth', listener);
    }, []);

    // if(user == undefined){
    //     return (
    //         <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    //             <ActivityIndicator />
    //         </View>
    //     )
    // }

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                {user ? (
                    <Stack.Screen name = 'HomeScreen' component={TabNavigator}/>
                    
                ): (
                    <>
                    <Stack.Screen name = 'LoginScreen' component={LoginScreen}/>
                    <Stack.Screen name = 'SignUpScreen' component={SignUpScreen}/>
                    <Stack.Screen name = 'ConfirmEmailScreen' component={ConfirmEmailScreen}/>
                    <Stack.Screen name = 'ForgotPasswordScreen' component={ForgotPasswordScreen}/>
                    <Stack.Screen name = 'NewPasswordScreen' component={NewPasswordScreen}/>
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;