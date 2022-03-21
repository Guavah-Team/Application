import React, { useState } from 'react';
import {StyleSheet, View, Text, ScrollView, Image, ImageBackground, TextInput, Modal} from 'react-native';
import colors from '../../config/colors/colors';
import Wordmark from '../../components/Wordmark/Wordmark';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import { Auth } from 'aws-amplify';
import RestaurantReview from '../../components/RestaurantReview';

function ReviewScreen(){
    return(
        <View style = {styles.container}>
        <View style = {styles.root}>
            <Text style = {styles.text}>Leave a Comment</Text>
            <TextInput placeholder='Optional'/>
            <Text> 2 of 2 </Text>
        </View>
           
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
    },
    root:{
        alignContent: 'center'
    },
    text:{
        fontWeight: 'bold'
    },
})

export default ReviewScreen;