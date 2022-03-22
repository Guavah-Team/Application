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
            <Text style = {styles.text}>Leave a Comment</Text>
            <TextInput style = {styles.input} placeholder = 'Optional' multiline = {true}/>
            <View style = {styles.button}><CustomButton text = {'Submit'}/></View>
            
            <Text>2 of 2</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center'
    },
    root:{
        justifyContent: 'center'
    },
    center:{
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    text:{
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: '8%',
        paddingBottom: '12%'
    },
    input:{
        width:'50%',
        height: '15%',
        borderWidth: 1,
        borderColor: colors.light,
    },
    button:{
        width: '50%',
        height: '7%',
    }
})

export default ReviewScreen;