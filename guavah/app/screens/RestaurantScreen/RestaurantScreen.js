import React, { useState } from 'react';
import {StyleSheet, View, Text, ScrollView, Image, ImageBackground, Button, Alert} from 'react-native';
import colors from '../../config/colors/colors';
import Wordmark from '../../components/Wordmark/Wordmark';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import { Auth, button } from 'aws-amplify';
import HorizontalReviewBox from '../../components/HorizontalReviewBox';

function RestaurantScreen({}){

const buttonPressed = () =>{
    Alert.alert("Button Pressed");
}
const name = "Olive Garden";
const location = "420 PushinP Ave Suite 69";
const image = { uri: "https://reactjs.org/logo-og.png" };
    
    return(
        <View style = {styles.root}>
            <ImageBackground style = {styles.image} source = {image}>  
                <View style = {styles.mask}/>
                <View style = {styles.headerBox}>
                    <Text style = {styles.text_Primary}>{name}</Text>
                    <Text style = {styles.text_Secondary}>{location}</Text>
                    <CustomButton text = {"Review"} type = {'SEARCH'}/>
                </View>
            </ImageBackground>

            <ScrollView style = {styles.container}>
                <View>
                    <Text style = {styles.headerText}>Directions</Text>
                    <View>
                        
                    </View>
                </View>

                <View style = {styles.special}>
                    <Text style = {styles.headerText}>Reviews</Text>
                    <View style = {styles.reviews}>
                        <HorizontalReviewBox/>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    root:{
        flex: 1,
        justifyContent: 'flex-end',
        alignContent: 'center',
        
    },
    container: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20,
    },
    text_Primary: {
        color: colors.primaryText,
        fontWeight: '600',
        fontSize: 32
    },
    text_Secondary: {
        paddingBottom: 10,
        color: colors.primaryText,
        fontWeight: '600',
        fontSize: 18,
    },
    image:{
        width: '100%',
        height: 200,
    },
    headerBox: {
        marginLeft: 10,
        marginTop: '8%',
    },
    headerText: {
        fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    },
    mask: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0, 
        borderRadius: 10,
    },
})
export default RestaurantScreen;