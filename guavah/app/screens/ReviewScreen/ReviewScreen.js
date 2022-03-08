import React, { useState } from 'react';
import {StyleSheet, View, Text, ScrollView, Image, ImageBackground} from 'react-native';
import colors from '../../config/colors/colors';
import Wordmark from '../../components/Wordmark/Wordmark';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import { Auth } from 'aws-amplify';
import RestaurantReview from '../../components/RestaurantReview';

function ReviewScreen(){
    return(
        <View style = {styles.root}>
            <Text style = {styles.text}>Review Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root:{
        flex: 1,
    },
    text:{
        color: colors.dark,
    },
})

export default ReviewScreen;