import React, { useState } from 'react';
import {StyleSheet, View, Text, ScrollView, Alert, Pressable, SafeAreaView, TextInput} from 'react-native';
import colors from '../../config/colors/colors';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import {Auth} from 'aws-amplify';

const EMAIL_REGEX = /^[a-zA-Z0-9.!$#%&-]+@[a-zA-Z0-9]+\.[a-z]{2,3}/

function UserSettingsScreen(){
    return (
        <View style = {styles.container}>

            <View style = {styles.header}>
                <SafeAreaView>
                    <Text style = {styles.textStyleHeader}>settings</Text>
                </SafeAreaView>
                <Pressable style = {styles.backButton} onPress={() => {alert('Back');}}>
                    <Text style = {styles.backButtonText}>{"<"}</Text>
                </Pressable>
            </View>

            <Text style = {styles.sections}>Profile</Text>
            <View style = {styles.profileSettingsBox}>
            
                <Text>Email</Text>
                <TextInput placeholder='Email' rules = {{
                            required: 'Email is required',
                            pattern: {
                                value: EMAIL_REGEX,
                                message: 'Email is invalid',
                            }
                        }}/>
            </View>
            <Text style = {styles.sections}>Location</Text>
            <View style = {styles.profileSettingsBox}>

            </View>
            <Text style = {styles.sections}>Preferences</Text>
            <View style = {styles.profileSettingsBox}>

            </View>
            <Text style = {styles.sections}>More</Text>
            <View style = {styles.profileSettingsBox}>

            </View>

            <View style = {styles.save}>
                <Pressable style = {styles.button} onPress={() => {alert('Changes Saved!');}}>
                    <Text style = {styles.textStyle}>save</Text>
                </Pressable>
            </View>
        </View>
       
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    backButton:{
        position: 'absolute',
        left: 20,
        top: '45%'
    },
    backButtonText:{
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.white,
    },
    header:{
        backgroundColor: colors.accent,
        height: '15%',
        alignItems: 'center'
    },
    save:{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 40,
        elevation: 5
    },
    button: {
        backgroundColor: colors.accent,
        width: '50%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30
    },
    sections:{
        fontWeight: 'bold',
        fontSize: 20,
        paddingLeft: 15,
        paddingVertical: 10,
    },
    textStyle:{
        color: colors.white,
    },
    textStyleHeader:{
        fontWeight: 'bold',
        fontSize: 20,
        color: colors.white,
    },
    profileSettingsBox:{
        
        width: '90%',
        height: '10%',
        alignSelf: 'center',
        shadowColor: '#171717',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 4,
        backgroundColor: colors.background,
        borderRadius: 5
    },
})

export default UserSettingsScreen;