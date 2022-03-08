import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import colors from '../../config/colors/colors';
import { Auth } from 'aws-amplify';
import HorizontalUserData from '../HorizontalUserData';

function RestaurantReview({text}) {

    return (
        <View style = {styles.container}>
            <HorizontalUserData name ={'Ryan Miller'} level = {10} iconName = {'Like'}/>
            <Text style = {styles.text_Primary}>Pull the user review</Text>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: '5%',
        backgroundColor: colors.white,
        borderRadius: 10,
        shadowColor: '#171717',
        shadowOffset: {width: 4, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },


    text_Primary: {
        color: colors.dark,  
  

    },
    text_SECONDARY: {
        color: colors.accent,

    },
    text_TERTIARY: {
        color: 'gray',
        // alignSelf: 'stretch',
    }
})

export default RestaurantReview;