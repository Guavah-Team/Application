import React, { useState } from 'react';
import {StyleSheet, View, Text, ScrollView, Image, ImageBackground, Button, Alert} from 'react-native';
import colors from '../../config/colors/colors';
import Wordmark from '../../components/Wordmark/Wordmark';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import { Auth, button } from 'aws-amplify';
import RestaurantReview from '../../components/RestaurantReview';

function RestaurantScreen({id}){

const buttonPressed = () =>{
    Alert.alert("Button Pressed");
}
const name = "Olive Garden";
const location = "420 PushinP Ave Suite 69";
const image = { uri: "https://reactjs.org/logo-og.png" };
    
    return(
        <View style = {styles.root}>
        
        <ScrollView style = {styles.container}>
            
                <View>
                    <ImageBackground style = {styles.image} source = {image}>
                    
                    <View style = {styles.special}>
                        <Text style = {styles.text_Primary}>{name}</Text>
                        <Text style = {styles.text_Secondary}>{location}</Text>
                        <CustomButton OnPress = {buttonPressed} text ={'Get Directions'} type = {'SPECIAL'}/>
                    </View>
                    </ImageBackground>
                </View>
                <View style = {styles.special}>
                    <Text style = {styles.text_Tertiary}>Reviews</Text>
                    <View style = {styles.reviews}>
                        <RestaurantReview/>
                    </View>
                    
                </View>
        </ScrollView>
        <View style = {styles.add_review}><CustomButton OnPress = {buttonPressed} text = {'Add Review'} type = {'FIXED'}/></View>
        </View>
    )
}

const styles = StyleSheet.create({
    root:{
        flex: 1,
        justifyContent: 'flex-end',
        alignContent: 'center',
        
    },
    container:{
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
        
        color: colors.dark,
        fontWeight: 'bold',
        fontSize: 17.5
    },
    add_review:{
        left: '25%',
        bottom: '8%'
    },
    image:{
        width: '100%',
        height: 300,
    },
    restaurantInfo:{

    },
    special:{
        paddingHorizontal: '5%'
    },
    reviews:{
        paddingVertical: '5%'
    }
    
})
export default RestaurantScreen;