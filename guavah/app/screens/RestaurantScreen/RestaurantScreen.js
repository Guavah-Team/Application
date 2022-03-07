import React, { useState } from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import colors from '../../config/colors/colors';
import Wordmark from '../../components/Wordmark/Wordmark';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import { Auth } from 'aws-amplify';
import RestaurantReview from '../../components/RestaurantReview';

function RestaurantScreen(){


    
    return(
        <View style = {styles.root}>
       <ScrollView style = {styles.container}>
            
                <View>
                    <Text style = {styles.text_Primary}>Olive Garden</Text>
                    <Text style = {styles.text_Secondary}>420 PushinP Ave Suite 69</Text>
                    <CustomButton text ={'Get Directions'} type = {'SPECIAL'}/>
                </View>
                <View>
                    <Text style = {styles.text_Tertiary}>Reviews</Text>
                    <RestaurantReview/>
                </View>
                
            
        </ScrollView>
        <CustomButton style ={styles.add_review} text = {'Add Review'}/>
        </View>
    )
}

const styles = StyleSheet.create({
    root:{
        flex: 1,
        justifyContent: 'flex-end',
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
        paddingBottom: '5%',
        color: colors.dark,
        fontWeight: 'bold',
        fontSize: 17.5
    },
    add_review:{
        padding: '30%'
    }
    
})
export default RestaurantScreen;