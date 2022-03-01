import React, { useState } from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import colors from '../../config/colors/colors';
import Wordmark from '../../components/Wordmark/Wordmark';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import { Auth } from 'aws-amplify';

function RestaurantScreen(){
    const navigation = useNavigation();
    
    
    return(
        <ScrollView>
            <View  style = {styles.root}>
            <Text style = {styles.root}>Olive Garden</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root:{
        flex: 1,
        padding: 33,
        alignItems: 'center',
    },
})
export default RestaurantScreen;