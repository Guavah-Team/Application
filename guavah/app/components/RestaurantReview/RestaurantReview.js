import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import colors from '../../config/colors/colors';
import { Auth } from 'aws-amplify';
import HorizontalUserData from '../HorizontalUserData';

function RestaurantReview({text}) {
    const userPicture = async (data) => {
        const {name} = name;
    }
    return (
        <View style = {styles.container}>
            <HorizontalUserData/>
            <Text>Pull the user review from dynamoDB</Text>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        
        backgroundColor: colors.white,
        borderRadius: 5,
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