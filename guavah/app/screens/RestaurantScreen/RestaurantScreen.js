import React, { useState } from 'react';
import {StyleSheet, View, Text, ScrollView, Image, ImageBackground} from 'react-native';
import colors from '../../config/colors/colors';
import Wordmark from '../../components/Wordmark/Wordmark';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import { Auth } from 'aws-amplify';
import RestaurantReview from '../../components/RestaurantReview';

function RestaurantScreen({id}){

const name = "Olive Garden";
const location = "420 PushinP Ave Suite 69";
const image = { uri: "https://reactjs.org/logo-og.png" };
    
    return(
        <View style = {styles.root}>
        <ScrollView style = {styles.container}>
            
                <View>
                {/*<ImageBackground source = {image}/>*/}
                    <Text style = {styles.text_Primary}>{name}</Text>
                    <Text style = {styles.text_Secondary}>{location}</Text>
                    <CustomButton text ={'Get Directions'} type = {'SPECIAL'}/>
                </View>
                <View>
                    <Text style = {styles.text_Tertiary}>Reviews</Text>
                    <RestaurantReview/>
                </View>
                
            
        </ScrollView>
        <View style = {styles.add_review}><CustomButton text = {'Add Review'} type = {'FIXED'}/></View>
        
        </View>
    )
}

const styles = StyleSheet.create({
    root:{
        flex: 1,
        justifyContent: 'flex-end',
        alignContent: 'center',
        paddingHorizontal: 10,
        
    },
    container:{
        padding: '5%',
        flex:1
    },
    text_Primary: {
        color: colors.dark,
        fontWeight: 'bold',
        fontSize: 30
    },
    text_Secondary: {
        paddingBottom: 10,
        color: colors.dark,
        fontSize: 20,
    },
    text_Tertiary:{
        paddingTop: '5%',
        paddingBottom: '5%',
        color: colors.dark,
        fontWeight: 'bold',
        fontSize: 17.5
    },
    add_review:{
        left: '25%',
        bottom: '8%'
    }
    
})
export default RestaurantScreen;